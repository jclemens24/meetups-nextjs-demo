import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Meetups with React &amp; NextJS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Browse a list of popular meetup spots"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const url = `mongodb+srv://jclemens24:${process.env.DB_PASSWORD}@cluster0.firnl.mongodb.net/meetups?retryWrites=true&w=majority`;

  const client = await MongoClient.connect(url);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();
  console.log(meetups);
  client.close();
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        image: meetup.image,
        id: meetup._id.toString(),
        description: meetup.description,
        address: meetup.address
      }))
    },
    revalidate: 10
  };
}
