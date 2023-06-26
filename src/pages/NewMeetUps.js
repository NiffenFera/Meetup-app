import NewMeetupForm from "../components/meetups/NewMeetupForm";

import { useNavigate } from 'react-router-dom';

function NewMeetupsPage() {
    const navigate = useNavigate();
  function onAddMeetup(meetupData) {
    fetch(
      "https://react-meetup-c75e4-default-rtdb.firebaseio.com//meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
        navigate('/', { replace: true });
    });
  }

  return (
    <section>
      <h1>Add New meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </section>
  );
}

export default NewMeetupsPage;
