import styled from '@emotion/styled';
import img from '../assets/img/bgSetting.png';
import Head from 'next/head';
import { css } from '@emotion/css';
import { useRouter } from 'next/router';
import { FC, ReactElement, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import DiapazoneCount from '../components/DiapazoneCount/Diapazone';
import DiapazoneValue from '../components/DiapazoneValue/DiapazoneValue';
import {
  align, bg, flex, h, justify, mrTop, radius, size, w, weight
} from '../utils/ShortStylesName';
import ValidationErr from '../components/ValidateErr/ValidateErr';
import { 
  setAmountAction, setIncreaseDecreaseAction, setValueAction, savingItemsInBD 
} from '../store/action/action';
import { randomizer } from '../components/Randomizer';
import { AppDispatch } from '../store';

const WebTitle = () => {
  return (
    <Head>
      <title>Sirius Future MiniGame By Nurbek</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>)
};

interface IAppWrapper {
  src: string,
}
const AppWrapper = styled.div`
  ${flex};
  ${justify('center')};
  ${align('center')};
  ${w('100%')};
  color: blue;
  min-height: 100vh;
  background-image: url(${(({src}: IAppWrapper) => src)});
  background-size: cover;
`
const YellowBtnsStyle = styled.button`
  color: black;
  border: none;
  margin: 0 10px;
  padding: 10px 20px;
  ${bg('#FFD748')};
  ${radius('20px')};
  ${weight('600')};
  ${size('14px')};
  &:hover {
    ${bg('#ffe999')};
    color: #423F458F;
    transition: 0.2s;
  }
`
const StartBtn = styled.button`
  ${weight('600')};
  ${size('17px')};
  ${bg('#38df7a')};
  ${radius('20px')};
  border: none;
  color: white;
  padding: 13px 50px;
  &:hover {
    background: #77f3a9;
    transition: 0.2s;
  }
`

const Home: FC = (): ReactElement => {
  const [amountItem, setAmountItem] = useState<number>(2);
  const [value, setValue] = useState<number | string>('A');
  const [increaseDecrease, setIncreaseDecrease] = useState<number>();
  const [errorValidate, seterrorValidate] = useState<boolean>(false);
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const handleSetAmountItem = (value: number): void => {    
    setAmountItem(value);
  }

  const handleSetValue = (value: number | string): void => {
    setValue(value);
  }

  const handleIncreaseDecrease = (increaseDecreaseVal: number): void => {
    setIncreaseDecrease(increaseDecreaseVal);
    seterrorValidate(false); //error validate-убираем
  }

  const handlePlay = async (): Promise<void> => {
    if (!increaseDecrease) {
      seterrorValidate(true);
    } else {
      setAmountAction(amountItem)(dispatch);
      setValueAction(value)(dispatch);
      setIncreaseDecreaseAction(increaseDecrease)(dispatch);
      
      randomizer(amountItem, value, increaseDecrease, dispatch)
      
      savingItemsInBD(amountItem, value, increaseDecrease)(dispatch);
      router.push('/game')
    }
  }


  return (
    <>
      <WebTitle />
      <AppWrapper {...img}>
        <div
          className={css`
            ${w('600px')};
            ${h('560px')};
            ${radius('40px')};
            ${bg('linear-gradient(#5857ac, #5554a836)')};
            `}
        >
          <div className={css`
            margin: 16px;
            padding: 20px;
            ${bg('white')};
            ${radius('28px')};
            ${w('568px')};
            ${h('528px')};
          `}>
            <DiapazoneCount handleSetAmountItem={handleSetAmountItem} />

            <DiapazoneValue handleSetValue={handleSetValue} />

            <div className={css`
              ${flex};
              ${justify('center')};
              margin: 30px 0 0;
            `}>
              <YellowBtnsStyle onClick={() => handleIncreaseDecrease(1)}>По возрастанию</YellowBtnsStyle>
              <YellowBtnsStyle onClick={() => handleIncreaseDecrease(-1)}>По убыванию</YellowBtnsStyle>
            </div>

            <ValidationErr
              theme={errorValidate ? 'block' : 'none'}
            >
              Выберите порядок!
            </ValidationErr>

            <div className={css`${flex}; ${justify('center')}; ${mrTop('30px')}`}>
              <StartBtn onClick={() => handlePlay()}>Играть</StartBtn>
            </div>

          </div>
        </div>
      </AppWrapper>
    </>
  )
}
export default Home;
