import styled from '@emotion/styled';
import { default as React, FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { align, bg, flex, h, justify, mrTop, radius, size, w } from '../../utils/ShortStylesName';
import coinImg from '../../assets/img/coin.png';
import { css } from '@emotion/css';
import { isInCorrectPlacedCoin } from '../../store/action/action';
import { State } from '../../store/combine/combine';
import { AppDispatch } from '../../store';
import { TInitialState } from '../../interface';

const Wrapper = styled.div`
    ${w('800px')};
    ${h('260px')};
    ${flex};
    ${align('center')};
    ${justify('space-between')};
    background-image: url(${(({src}: GroupProps) => src)});
    background-size: cover;
    padding: 80px;
`
const EmptyCircle = styled.div`
    ${w('105px')};
    ${h('105px')};
    ${bg('#80808005')};
    margin-left: -14px;
    ${mrTop('-7px')};
    ${radius('50%')};
`

interface GroupProps {
    imgGroup?: {
        src: string,
    },
    src?: string,
}

const Group: FC<GroupProps> = ({ imgGroup }): ReactElement => {
    const { dragStartItem, randomItems }: TInitialState  = useSelector((state: State) => state.store);
    const dispatch: AppDispatch = useDispatch();

    function handlerDragOver(e: React.DragEvent) {
        e.preventDefault();
    }
    function handlerDragLeave(e:React.DragEvent) {}
    function handlerDragStart(e: React.DragEvent) {}
    function handlerDragEnd(e: React.DragEvent) {}
    
    async function handlerDrop (e: any, index: number): Promise<void> {     
        e.preventDefault();
        if (randomItems?.sortedRes[index] === dragStartItem) {
            await isInCorrectPlacedCoin(true)(dispatch)
            e.target.append(dragStartItem);
            e.target.style.backgroundSize = 'cover';
            e.target.style.backgroundImage = `url(${coinImg.src})`;
        }
    }

    return (
        <Wrapper {...imgGroup}>
            {[1,2,3,4,5,6].map((item: number, index: number) => {
                return (
                    <EmptyCircle 
                        key={item + 'key'}
                        draggable={true}
                        onDragOver={(e: React.DragEvent) => handlerDragOver(e)}
                        onDragLeave={(e: React.DragEvent) => handlerDragLeave(e)}
                        onDragStart={(e: React.DragEvent) => handlerDragStart(e)}
                        onDragEnd={(e: React.DragEvent) => handlerDragEnd(e)}
                        onDrop={(e: React.DragEvent<HTMLDivElement>) => handlerDrop(e, index)}
                    >
                        <h4 className={css`
                            margin: 0;
                            color: white;
                            ${size('30px')};
                            ${h('100%')};
                            ${flex};
                            ${align('center')};
                            ${justify('center')};
                        `}>
                        </h4>
                    </EmptyCircle>
                )
            })}
        </Wrapper>
    )
}
export default Group;