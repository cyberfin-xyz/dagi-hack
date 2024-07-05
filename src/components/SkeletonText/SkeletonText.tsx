import React from "react";
import { observer } from 'mobx-react'
import { StyledTextSkeleton } from './styles';

interface IProps {
    width?: number | string,
    height?: number | string,
    borderRadius?: number,
}

const SkeletonText = ({ width = 200, height = 16, borderRadius = 5 }: IProps) => (
    <StyledTextSkeleton
        speed={3}
        backgroundColor="rgba(242, 242, 242, 0.10)"
        foregroundColor="rgba(242, 242, 242, 0.30)"
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
    >
        <rect x="0" y="0" rx={borderRadius} ry={borderRadius} width={width} height={height} />
    </StyledTextSkeleton>
);

export default observer(SkeletonText)