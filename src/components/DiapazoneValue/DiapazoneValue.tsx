import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { FC, ReactElement } from 'react'
import {
    align, bg, direction, flex, font, h, justify, mrBottom, mrTop, radius, size, w, weight 
} from '../../utils/ShortStylesName'

const Styledh4 = styled.h4`
    ${w('20px')}; 
    margin: 0; 
    color: black; 
    text-align:center
`
const StyledInput = styled.input`
    ${w('300px')};
    
    &::-webkit-slider-runnable-track {
        ${h('13px')};
        ${w('100%')};
        ${bg('#ffd748')};
        ${radius('10px')};
        border: none;
    }
`
interface DiapazoneValue {
    handleSetValue: (val: number | string) => void;
}

const DiapazoneValue: FC<DiapazoneValue> = ({ handleSetValue }): ReactElement => {

    const handleChangeOption = (value: string) => {
        switch (value) {
            case '1':
                handleSetValue('A')
                break;
            case '2':
                handleSetValue(9)
                break;
            case '3':
                handleSetValue(19)
                break;
            case '4':
                handleSetValue(50)
                break;
            case '5':
                handleSetValue(99)
                break;
            case '6':
                handleSetValue(999)
                break;
            default:
                break;
        }
    }

    return (
        <>
            <h5 className={css`
              ${font('Sans-serif')};
              ${size('28px')};
              ${weight('400')};
              ${mrBottom('20px')};
              ${mrTop('20px')};
              text-align: center;
              color: black;
            `}
            >Значения</h5>
            <div className={css`
              ${flex};
              ${direction('column')};
              ${align('center')}
            `}>
                <div className={css`
                    ${flex};
                    ${justify('space-between')};
                    ${w('300px')};
                    ${h('20px')};
                `}>
                    <Styledh4>A</Styledh4>
                    <Styledh4>9</Styledh4>
                    <Styledh4>19</Styledh4>
                    <Styledh4>50</Styledh4>
                    <Styledh4>99</Styledh4>
                    <Styledh4>999</Styledh4>
                </div>

                <StyledInput
                    className={css`${w('300px')};`}
                    type="range"
                    min="1"
                    max="6"
                    defaultValue={'1'}
                    name='tickmarks'
                    list='tickmarks'
                    id='temp'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeOption(e.target.value)}
                />

                <datalist id="tickmarks">
                    <option value="A"></option>
                    <option value="9"></option>
                    <option value="19"></option>
                    <option value="50"></option>
                    <option value="99"></option>
                    <option value="999"></option>
                </datalist>
            </div>
        </>
    )
}
export default DiapazoneValue