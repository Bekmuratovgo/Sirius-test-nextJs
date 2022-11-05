import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { FC, ReactElement } from 'react'
import { 
    align, bg, direction, flex, font, h, justify, mrBottom, mrTop, radius, size, w, weight 
} from '../../utils/ShortStylesName'


const StyledInput = styled.input`
    ${w('200px')};
    
    &::-webkit-slider-runnable-track {
        ${h('13px')};
        ${w('100%')};
        ${bg('#ffd748')};
        ${radius('10px')};
        border: none;
    }
`
const StyledH4 = styled.h4`
    margin: 0; 
    color: black; 
`
interface DiapazoneCountProps {
    handleSetAmountItem: (amount: number) => void;
}

const DiapazoneCount: FC<DiapazoneCountProps> = ({ handleSetAmountItem }): ReactElement => {

    return (
        <div>
            <h5 className={css`
              ${font('Sans-serif')};
              ${size('28px')};
              ${weight('400')};
              ${mrBottom('20px')};
              ${mrTop('20px')};
              color: black;
              text-align: center;
            `}>
                Кол-во предметов
            </h5>

            <div className={css`
              ${flex};
              ${direction('column')};
              ${align('center')}
            `}>
                <div className={css`
                    ${flex};
                    ${justify('space-between')};
                    ${w('190px')};
                    ${h('20px')};
                `}>
                    <StyledH4>2</StyledH4>
                    <StyledH4>3</StyledH4>
                    <StyledH4>4</StyledH4>
                    <StyledH4>5</StyledH4>
                </div>

                <StyledInput
                    type="range"
                    min="2"
                    max="5"
                    defaultValue={'2'}
                    name='tickmarks'
                    list='tickmarks'
                    id='temp'
                    onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => handleSetAmountItem(+e.target.value)
                    }
                />

                <datalist id="tickmarks" >
                    <option value="2" label="very cold!"></option>
                    <option value="3" label="cool"></option>
                    <option value="4" label="medium"></option>
                    <option value="5" label="getting warm!"></option>
                </datalist>
            </div>
        </div>
    )
}
export default DiapazoneCount