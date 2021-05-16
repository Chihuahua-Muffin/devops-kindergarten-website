import ExplainContainer from '#/components/explain/ExplainContainer';
import ExplainTitle from '#/components/explain/ExplainTitle';
import ExplainSubTitle from '#/components/explain/ExplainSubTitle';
import ExplainContent from '#/components/explain/ExplainContent';

// ExplainTitle     : h1
// ExplainSubTitle  : h2   /#{id} 이런식으로 들어감
// ExplainContent   : p

const ReleasePage = () => {
  return (
    <ExplainContainer>
      <ExplainTitle>RELEASE</ExplainTitle>
      <ExplainContent>
        RELEASE?
      </ExplainContent>
      <ExplainSubTitle id="tools">Tools</ExplainSubTitle>
      <ExplainContent>
        대표 툴에 대한 설명
      </ExplainContent>
    </ExplainContainer>
  );
};

export default ReleasePage;