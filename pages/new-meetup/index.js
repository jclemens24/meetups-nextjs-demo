import NewMeetupForm from '../../components/meetups/NewMeetupForm';

export default function NewMeetupPage(props) {
  const newMeetupHandler = meetupData => {
    console.log(meetupData);
  };

  return <NewMeetupForm onAddMeetup={newMeetupHandler} />;
}
