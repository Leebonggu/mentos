import styled from "styled-components";

import Skeleton from "@/components/Skeleton";

const Container = styled.section`
  padding: 0px 16px;
  .section-title {
    font-weight: ${props => props.theme.typography.weight.bold};
    font-size: ${props => props.theme.typography.size.xxl};
    line-height: ${props => props.theme.typography.lineHight.xxl};
    letter-spacing: -0.01em;
    padding-bottom: 8px;
  }
  .camp-cards {
    @media (min-width: 680px) {
      display: flex;
      justify-content: space-between;
      gap: 16px;
    }
  }
`;

const CardSectionSkeleton = () => {
  return (
    <Container>
      <div className="section-title">
        <Skeleton
          style={{ width: 200, height: 38, borderRadius: "4px" }}
          animated
        />
      </div>
      <div className="camp-cards">
        <Skeleton
          style={{ width: "100%", height: 280, borderRadius: "10px" }}
          animated
        />
        <Skeleton
          style={{ width: "100%", height: 280, borderRadius: "10px" }}
          animated
        />
        <Skeleton
          style={{ width: "100%", height: 280, borderRadius: "10px" }}
          animated
        />
        <Skeleton
          style={{ width: "100%", height: 280, borderRadius: "10px" }}
          animated
        />
      </div>
    </Container>
  );
};

export default CardSectionSkeleton;
