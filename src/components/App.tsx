import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { encrypt, decrypt } from '../logic/encrypt';

type Event = React.ChangeEvent<HTMLTextAreaElement>;

export const App = () => {
    const [original, setOriginal] = useState('');
    const [encrypted, setEncrypted] = useState('');
    const handleOriginal = useCallback((event: Event) => {
        const text = event.target.value;
        setOriginal(() => text);
        setEncrypted(() => encrypt(text));
    }, []);
    const handleEncrypted = useCallback((event: Event) => {
        const text = event.target.value;
        setOriginal(() => decrypt(text));
        setEncrypted(() => text);
    }, []);
    return (
        <Wrapper>
            <InputWrapper>
                <TextField
                    placeholder="普通の文章を入力"
                    value={original}
                    onChange={handleOriginal}
                />
                <Arrow>⇔</Arrow>
                <TextField
                    placeholder="暗号文を入力"
                    value={encrypted}
                    onChange={handleEncrypted}
                />
            </InputWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
`;

const InputWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const TextField = styled.textarea`
    width: 90%;
    height: 150px;
    padding: 8px;
    ${media.greaterThan('medium')`
        width: 40%;
    `}
`;

const Arrow = styled.p`
    text-align: center;
    margin: 0 20px;
    font-size: 40px;
    ${media.lessThan('medium')`
        margin: 10px 0;
        width: 100%;
        transform: rotate(0.25turn);
    `}
`;
