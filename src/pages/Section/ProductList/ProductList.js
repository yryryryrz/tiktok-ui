import React from 'react';
import classNames from 'classnames/bind';
import sytles from './ProductList.scss';

const cx = classNames.bind(sytles);

function ProductList() {
    return (
        <div className="w-full h-auto grid grid-cols-6 gap-6 flex justify-between ">
            <div className={cx('arrivals-img')}>
                <img src="https://demo.templatesjungle.com/kaira/images/product-item12.jpg" alt="" />
                <a className={cx('arrivals-a')} href="/">
                    DARK FLORISH ONEPIECE
                </a>
                <div>
                    <p className={cx('arrivals-p')}>$95.00</p>
                    <div>
                        <span className={cx('arrivals-span')}>ADD TO CART</span>
                    </div>
                </div>
            </div>
            <div className={cx('arrivals-img')}>
                <img src="https://demo.templatesjungle.com/kaira/images/product-item13.jpg" alt="" />
                <a className={cx('arrivals-a')} href="/">
                    DARK FLORISH ONEPIECE
                </a>
                <div>
                    <p className={cx('arrivals-p')}>$95.00</p>
                    <div>
                        <span className={cx('arrivals-span')}>ADD TO CART</span>
                    </div>
                </div>
            </div>
            <div className={cx('arrivals-img')}>
                <img src="https://demo.templatesjungle.com/kaira/images/product-item14.jpg" alt="" />
                <a className={cx('arrivals-a')} href="/">
                    DARK FLORISH ONEPIECE
                </a>
                <div>
                    <p className={cx('arrivals-p')}>$95.00</p>
                    <div>
                        <span className={cx('arrivals-span')}>ADD TO CART</span>
                    </div>
                </div>
            </div>
            <div className={cx('arrivals-img')}>
                <img src="https://demo.templatesjungle.com/kaira/images/product-item15.jpg" alt="" />
                <a className={cx('arrivals-a')} href="/">
                    DARK FLORISH ONEPIECE
                </a>
                <div>
                    <p className={cx('arrivals-p')}>$95.00</p>
                    <div>
                        <span className={cx('arrivals-span')}>ADD TO CART</span>
                    </div>
                </div>
            </div>
            <div className={cx('arrivals-img')}>
                <img src="https://demo.templatesjungle.com/kaira/images/product-item15.jpg" alt="" />
                <a className={cx('arrivals-a')} href="/">
                    DARK FLORISH ONEPIECE
                </a>
                <div>
                    <p className={cx('arrivals-p')}>$95.00</p>
                    <div>
                        <span className={cx('arrivals-span')}>ADD TO CART</span>
                    </div>
                </div>
            </div>
            <div className={cx('arrivals-img')}>
                <img src="https://demo.templatesjungle.com/kaira/images/product-item15.jpg" alt="" />
                <a className={cx('arrivals-a')} href="/">
                    DARK FLORISH ONEPIECE
                </a>
                <div>
                    <p className={cx('arrivals-p')}>$95.00</p>
                    <div>
                        <span className={cx('arrivals-span')}>ADD TO CART</span>
                    </div>
                </div>
            </div>
            <div className={cx('arrivals-img')}>
                <img src="https://demo.templatesjungle.com/kaira/images/product-item15.jpg" alt="" />
                <a className={cx('arrivals-a')} href="/">
                    DARK FLORISH ONEPIECE
                </a>
                <div>
                    <p className={cx('arrivals-p')}>$95.00</p>
                    <div>
                        <span className={cx('arrivals-span')}>ADD TO CART</span>
                    </div>
                </div>
            </div>
            <div className={cx('arrivals-img')}>
                <img src="https://demo.templatesjungle.com/kaira/images/product-item15.jpg" alt="" />
                <a className={cx('arrivals-a')} href="/">
                    DARK FLORISH ONEPIECE
                </a>
                <div>
                    <p className={cx('arrivals-p')}>$95.00</p>
                    <div>
                        <span className={cx('arrivals-span')}>ADD TO CART</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
