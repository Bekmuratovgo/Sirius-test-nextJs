import styled from "@emotion/styled"
import { align, direction, flex, justify, size, w, weight } from "../utils/ShortStylesName"
import imgBg from '../assets/img/bgMain.jpg';
import Group from "../components/Group/Group";
import imgGroup from '../assets/img/group.png';
import { useDispatch, useSelector } from "react-redux";
import { FC, ReactElement, useEffect, useState } from "react";
import { getItemsFromBD, getRandomedItemsFromBD } from "../store/action/action";
import arrowImg from '../assets/img/Vector.png';
import { css } from "@emotion/css";
import CoinImg from '../components/CoinImg/CoinImg';
import Modal from '../components/Modal/Modal';
import { State } from "../store/combine/combine";
import { AppDispatch } from "../store";
import { TInitialState } from "../interface";

const MainWrapper = styled.div`
  ${w('100%')};
  min-height: 100vh;
  background-image: url(${(({src}: IStyledElem) => src)});
  background-size: cover;
  ${flex};
  ${direction('column')};
  ${justify('space-between')};
  ${align('center')};
  padding: 30px 20px;
`
const Title = styled.h4`
  ${size('22px')};
  ${weight('400')};
  color: white;
  margin: ${(({mr}: IStyledElem) => mr)};
`
const ArrowImg = styled.img`
  src: url(${({src}: IStyledElem) => src});
  transform: ${(({transform}: IStyledElem) => transform ? transform : 'none')};
`
const ArrowWrapper = styled.div`
  ${flex};
  ${align('center')};
  justify-content: ${(({justify}: IStyledElem) => justify)};
  margin: 0 50px;
`
interface IStyledElem {
  src?: string,
  justify?: string,
  transform?: string,
  mr?: string,
}

const MainPage: FC = (): ReactElement => {
  const [active, setActive] = useState<boolean>(false);

  const dispatch: AppDispatch = useDispatch();
  const { increaseDecrease }: TInitialState = useSelector((state: State) => state.store);

  useEffect(() => {
    getItemsFromBD()(dispatch);
    getRandomedItemsFromBD()(dispatch);
  }, [])

  return (
    <MainWrapper {...imgBg}>
      <CoinImg setActive={setActive} />

      <div className={css`width: 800px;`} >
        {increaseDecrease! < 0 ?
          <ArrowWrapper {...{justify: 'end'}}>
            <ArrowImg src={arrowImg.src} {...{transform: 'rotate(180deg)'}} />
            <Title {...{mr: '0 0 0 -220px'}}>По убыванию</Title>
          </ArrowWrapper>
          :
          <ArrowWrapper {...{justify: 'start'}}>
            <Title {...{mr: '0 -220px 0 0'}}>По возрастанию</Title>
            <ArrowImg src={arrowImg.src} />
          </ArrowWrapper>
        }
        <Group imgGroup={imgGroup} />
      </div>
      <Modal active={active} />
    </MainWrapper>
  )
}
export default MainPage;