import Title from "@/components/Title";

const GoogleCalendar = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-start">
        <Title>Calendar</Title>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=geoli.work%40gmail.com&ctz=America%2FNew_York"
          style={{ border: "0" }}
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleCalendar;
