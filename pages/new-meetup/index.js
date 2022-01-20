import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';

export default function NewMeetupPage(props) {
  const router = useRouter();
  const newMeetupHandler = async meetupData => {
    const res = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    router.push('/');
  };

  return (
    <React.Fragment>
      <Head>
        <title>Add a new meetup</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Add a new meetup spot" />
      </Head>
      <NewMeetupForm onAddMeetup={newMeetupHandler} />{' '}
    </React.Fragment>
  );
}
