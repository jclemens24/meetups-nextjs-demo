import { Fragment } from 'react';
import Image from 'next/image';
import classes from '../../components/layout/Layout.module.css';
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';

export default function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Meetup descriptions" />
      </Head>
      <Image
        src={props.meetupData.image}
        alt="travel image"
        objectFit="cover"
        layout="intrinsic"
        height={1000}
        width={2000}
      />
      <h1 className={classes.detailtext}>{props.meetupData.address}</h1>
      <p className={classes.detailtext}>{props.meetupData.description}</p>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const url =
    'mongodb+srv://jclemens24:qzpmQZPM24@cluster0.firnl.mongodb.net/meetups?retryWrites=true&w=majority';

  const client = await MongoClient.connect(url);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  return {
    paths: meetups.map(meetup => ({
      params: { meetupId: meetup._id.toString() }
    })),
    fallback: false
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const url =
    'mongodb+srv://jclemens24:qzpmQZPM24@cluster0.firnl.mongodb.net/meetups?retryWrites=true&w=majority';

  const client = await MongoClient.connect(url);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  return {
    props: {
      meetupData: {
        id: meetups._id.toString(),
        image: meetups.image,
        description: meetups.description,
        address: meetups.address,
        title: meetups.title
      }
    }
  };
}
