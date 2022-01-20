import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';

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

export default function HomePage() {
  return (
    <Layout>
      {' '}
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  );
}
