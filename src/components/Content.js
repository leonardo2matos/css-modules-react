import style from './Content.module.css'

const Content = () => {
    return (
        <div className={style.content}>
            <h2>Title</h2>
            <p>
                istem muitas variações das passagens do Lorem Ipsum disponíveis, mas a maior parte sofreu alterações de alguma forma, pela injecção de humor, ou de palavras aleatórias que nem sequer parecem suficientemente credíveis.
            </p>
            <button className={style.btn}>Outher button test</button>

        </div>
    )
}

export default Content