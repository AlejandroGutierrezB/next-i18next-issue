import Layout from '../components/layout';
import Counter from '../components/counter';
import { useTranslation } from 'next-i18next';

const Index = () => {
  const { t } = useTranslation('common');
  return (
    <Layout home>
      <section className="section">
        <div className="container">
          <h1 className="title">{t('profile')}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Counter></Counter>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
