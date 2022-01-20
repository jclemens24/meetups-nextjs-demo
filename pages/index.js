import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image:
      'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    address: '145 Great Lakes Street',
    description: 'First Meetup'
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image:
      'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    address: '1 Beach Street, San Juan, Puerto Rico',
    description: 'First Meetup'
  },
  {
    id: 'm3',
    title: 'Third Meetup',
    image:
      'https://images.unsplash.com/photo-1601701748979-be3215445510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80',
    address: '32 Jurassic Lane, Olympia, Washington',
    description: 'First Meetup'
  }
];

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
  const url =
    'mongodb+srv://jclemens24:qzpmQZPM24@cluster0.firnl.mongodb.net/meetups?retryWrites=true&w=majority';

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
