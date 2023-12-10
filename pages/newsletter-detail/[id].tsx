import Header from '../../components/layout/header/Header';
import NewsLetterDetails from '../../components/layout/newsletterdetail/NewsLetterDetail';
import Footer from '../../components/layout/footer/Footer';
import { useRouter } from 'next/router';

import { gql, useQuery } from '@apollo/client';
import { getErxesApolloClient } from '@/lib/initApollo';
import Loader from '@/components/common/Loader';
import { GET_KNOWLEDGE_BASE_ARTICLE_DETAIL } from '@/components/graphql/queries';

export default function NewsLetterDetail() {
  const router = useRouter();
  const field_query = useQuery(gql(GET_KNOWLEDGE_BASE_ARTICLE_DETAIL), {
    variables: { id: router.query.id },
    client: getErxesApolloClient(),
    fetchPolicy: 'network-only',
  });

  return (
    <main className="w-full">
      <Header />
      {field_query.loading ? <Loader type="NewsLetterDetail" /> : <NewsLetterDetails data={field_query.data?.knowledgeBaseArticleDetail} />}
      <Footer />
    </main>
  );
}
