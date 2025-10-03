import { StyledSkeleton } from './styles';
import { SkeletonProps } from './types';

export const Skeleton = (props: SkeletonProps) => {
  return <StyledSkeleton {...props} />;
};

export default Skeleton;