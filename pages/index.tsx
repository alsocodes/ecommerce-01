import FrontLayout from '@/components/FrontLayout';

const data = {
  title: 'Welcome to shop',
  description: 'The shop is ready for you to shop',
};

export default function Home() {
  return (
    <FrontLayout data={data}>
      <div className='p-8 bg-base-100'>Hello</div>
    </FrontLayout>
  );
}
