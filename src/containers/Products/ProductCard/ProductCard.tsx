import React, { FC, ReactElement, useCallback, useMemo } from 'react';
import styles from './ProductCard.module.css';
import coffe from './photo/coffe.jpg';
import tea from './photo/tea.jpg';
import coffeMilk from './photo/coffe-milk.jpg';
import juice from './photo/juice.jpg';
import { getCurrencyFormat } from '../../../utils/format.utils';

const mapImg = {
    coffe,
    tea,
    coffeMilk,
    juice,
};

type TProductsProps = {
    children?: never;
    img: 'coffe' | 'tea' | 'coffeMilk' | 'juice';
    name: string;
    id: number;
    cost: number;
    quantity: number;
    onClick: (id: number) => void;
};

const ProductCard: FC<TProductsProps> = ({ img, name, cost, quantity, onClick, id }: TProductsProps): ReactElement => {
    const handleClick = useCallback(() => onClick(id), [id, onClick]);
    return useMemo(
        () => (
            <div className={`${styles.card} ${styles[`card_${quantity}`] || ''}`}>
                <img src={mapImg[img]} alt={img} className={styles['card-image']} />
                <div className={styles['card-content']}>
                    <div>{name}</div>
                    <div className={styles.currency}>
                        <b>{getCurrencyFormat(+cost)}</b>
                        <span>x{quantity}</span>
                    </div>
                    <div className={styles.btn} onClick={handleClick}>
                        Купить
                    </div>
                </div>
            </div>
        ),
        [img, name, cost, quantity, handleClick],
    );
};

export default ProductCard;
