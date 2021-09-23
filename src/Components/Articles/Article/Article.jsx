import React from "react";
import "./Article.css";

function Article({ article }) {
    return (
        <div className="article">
            <header className="article__header">
                <a
                    href={`https://tikkaa.ir/blog/${article.slug}`}
                    className="article__header-link"
                >
                    <h2>{article.url}</h2>
                </a>
            </header>

            <div className="article__details">
                <div className="article__details-right">
                    <img
                        src={`https://tikkaa.ir//${article?.user?.image}`}
                        className="article__profile"
                        alt={article?.user?.name}
                    />
                    <div className="article__name-date">
                        <h5 className="article__writer">
                            {article?.user?.name}
                        </h5>
                        <h6 className="article__date">یکشنبه, 24 مرداد 1400</h6>
                    </div>
                </div>

                <div className="article__details-left">
                    <div className="article__category">
                        <span>دسته بندی:</span>
                        <a
                            href={`https://tikkaa.ir/blog/${article.slug}`}
                            className="article__category-link"
                        >
                            حفظ انگیزه یادگیری زبان
                        </a>
                    </div>
                    <div className="article__reading-time">
                        زمان مطالعه: {article.creator}
                    </div>
                </div>
            </div>

            <div className="article__img-container">
                <a href={`https://tikkaa.ir/blog/${article.slug}`}>
                    <img
                        src={`https://tikkaa.ir/${article.image}`}
                        alt="Article"
                        className="article__img"
                    />
                </a>
            </div>

            <div className="article__desc">
                <p>{article.description}</p>
            </div>

            <div className="article__button-container">
                <a
                    href={`https://tikkaa.ir/blog/${article.slug}`}
                    className="article__button"
                >
                    ادامه مطلب‌
                </a>
            </div>
        </div>
    );
}

export default Article;
