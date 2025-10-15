export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'HopeNexus Consultancy',
    image: 'https://yourcompany.com/logo.jpg',
    '@id': 'https://hopenexus.org',
    url: 'https://hopenexus.org',
    priceRange: '$$',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.6062,
      longitude: -122.3321
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00'
    },
    areaServed: [
      { '@type': 'City', name: 'Seattle' },
      { '@type': 'City', name: 'Bellevue' },
      { '@type': 'City', name: 'Tacoma' },
      { '@type': 'City', name: 'Redmond' },
      { '@type': 'City', name: 'Kirkland' }
    ],
    description: 'Leading business consultancy firm serving Seattle and the greater Puget Sound region.'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}