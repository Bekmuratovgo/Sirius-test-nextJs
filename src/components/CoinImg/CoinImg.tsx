import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { FC, ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import coinImg from '../../assets/img/coin.png';
import { TInitialState } from "../../interface";
import { AppDispatch } from "../../store";
import { isInCorrectPlacedCoin, setDragStartItem } from "../../store/action/action";
import { State } from "../../store/combine/combine";
import { align, flex, h, justify, randomCoinPlace, size, w } from "../../utils/ShortStylesName";

interface ICoinWrapperStyle {
    src: string,
    display?: string,
    random: number,
}
const CoinWrapper = styled.div`
    display: ${(({ display }: ICoinWrapperStyle) => display ? display : 'flex')};
    ${justify('center')};
    ${align('center')};
    ${w('107px')};
    ${h('109px')};
    background-image: url(${(({src}: ICoinWrapperStyle) => src)});
    margin-top: ${(({ random }: ICoinWrapperStyle) => `${random}px`)};
    background-size: cover;
    `
const CoinItem = styled.h4`
    color: white;
    ${size('30px')};
    margin: 0;
    padding: 0 0 10px;
    z-index: 11;
    opacity: 1;
`
interface ImgProps {
    setActive: (val: boolean) => void;
}

const Img:FC<ImgProps> = (props): ReactElement => {
    const { randomItems, inCorrectPlacedCoin }: TInitialState = useSelector((state: State) => state.store);
    const [amountTrueAnswer, setAmountTrueAnswer] = useState<number>(0)
    const dispatch: AppDispatch = useDispatch();

    const handlerDragStart = (e: React.DragEvent, item: number | string): void => {
        setDragStartItem(item)(dispatch);
    }

    const handlerDragEnd = async (e: any): Promise<void> => {
        await isInCorrectPlacedCoin(false)(dispatch)
        if (!inCorrectPlacedCoin) {
            e.target.style.opacity = '1'
        } else if (inCorrectPlacedCoin) {
            setAmountTrueAnswer(amountTrueAnswer + 1)
            e.target.style.opacity = '0';
        }
    }

    useEffect(() => {
        if (randomItems?.sortedRes.length === amountTrueAnswer) {
            props.setActive(true);
        }
    }, [amountTrueAnswer])

    let audio = new Audio('../');

    const handleAudio = () => {
        audio.play()
    }

    return (
        <div className={css`${flex};`}>
            {randomItems?.randomRes.map((item: number | string, index: number) => {
                return (
                    <CoinWrapper
                        key={index}
                        draggable={true}
                        {...{ random: randomCoinPlace(index) }}
                        onDragStart={(e: React.DragEvent) => handlerDragStart(e, item)}
                        onDragEnd={(e: React.DragEvent) => handlerDragEnd(e)}
                        {...coinImg}
                        onClick={handleAudio}
                    >
                        <CoinItem>{item}</CoinItem>
                    </CoinWrapper>
                )
            })}
        </div>
    )
}
export default Img;