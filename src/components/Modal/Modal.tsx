import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { align, bg, direction, flex, h, justify, mrBottom, radius, size, w } from "../../utils/ShortStylesName";
import starImg from '../../assets/img/star.png';
import { useRouter } from "next/router";
import { FC, ReactElement } from "react";

interface ModalDiv {
    visible: string
}
interface StarImg {
    top?: string,
    left?: string,
    right?: string,
    width?: string,
    src?: string,
}

const Modal = styled.div`
    ${w('100vw')};
    ${h('100vh')};
    ${flex};
    ${justify('center')};
    ${align('center')};
    background-color: #00000045;
    position: fixed;
    top: 0;
    left: 0;
    transform: ${(({visible}: ModalDiv) => visible)};
`
const AgainBtn = styled.button`
    padding: 10px 22px;
    ${bg('#2bd600')};
    color: white;
    ${size('20px')};
    border: none;
    ${radius('12px')};
    ${mrBottom('20px')};
    &:hover {
        ${bg('#ffe250')};
        transition: 0.2s;
    }
`
const Title = styled.h1`
    color: #ffe556;
    ${size('50px')};
    margin: 10px 0 0 0;
`
const StarImg = styled.img`
    src: url(${(({src}: StarImg) => src)});
    width: ${(({width}: StarImg) => width ? width : '80px')};
    position: absolute;
    top: ${(({top}: StarImg) => top ? top : 'none')};
    left: ${(({left}: StarImg) => left ? left : 'none')};
    right: ${(({right}: StarImg) => right ? right : 'none')};
`
const BlockWrapper = styled.div`
    ${w('100%')};
    position: relative;
    ${flex};
    ${justify('center')};
`

interface IndexProps {
    active: boolean,
}

const Index: FC<IndexProps> = ({ active}): ReactElement => {
    const router = useRouter();

    const handleAganBtn = (): void => {
        localStorage.clear();
        router.push('/');
    }

    return (
        <Modal {...{visible: active ? 'scale(1)':'scale(0)'}}>
            <div 
                className={css`
                padding: 20px;
                ${bg('linear-gradient(#67de88, #9198e575)')};
                ${radius('14px')};
                ${h('300px')};
                ${w('400px')};
            `}>
                <div className={css`
                    ${radius('12px')};
                    ${bg('white')};
                    ${h('260px')};
                    ${w('360px')};
                    ${flex};
                    ${direction('column')};
                    ${justify('space-between')};
                    ${align('center')}
                `}>
                    <BlockWrapper>
                        <StarImg src={starImg.src} {...{top: '-40px', left: '-50px', width: '100px'}} />
                        <Title>Победа!</Title>
                        <StarImg src={starImg.src} {...{top: '10px',right: '-50px', width: '130px'}} />
                    </BlockWrapper>
                    
                    <p className={css`margin: 0; color: #5F40A1; ${size('20px')}`}>Молодец! Ты успешно <br /> справился с заданием!</p>
                    
                    <BlockWrapper>
                        <StarImg src={starImg.src} {...{top: '-30px',left: '-70px', width: '160px'}} />
                        <AgainBtn onClick={() => handleAganBtn()}>Заново</AgainBtn>
                        <StarImg src={starImg.src} {...{right: '-50px', width: '100px'}} />
                    </BlockWrapper>
                </div>
            </div>
        </Modal>
    )
}
export default Index;