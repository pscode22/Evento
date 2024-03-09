import H1 from '@/components/h1';

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default function EventsPage({ params }: EventsPageProps) {
  const { city } = params;

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[1.25rem] py-24">
      <H1>
        {city === 'all' && 'All Events'}
        {city !== 'all' && `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
    </main>
  );
}
