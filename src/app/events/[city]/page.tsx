import H1 from '@/components/h1';
import { EventoEvent } from '@/lib/types';

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventsPageProps) {
  const { city } = params;

  const response = await fetch(`https://bytegrad.com/course-assets/project/evento/api/events?city=${city}`);

  const events: EventoEvent[] = await response.json();

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[1.25rem] py-24">
      <H1 className='mb-28'>
        {city === 'all' && 'All Events'}
        {city !== 'all' && `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      {events.map(event => (
        <section key={event.id}>{event.name}</section>
      ))}
    </main>
  );
}
