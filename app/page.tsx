export default function Home() {
  return (
    <main className="page">
      <section className="card">
        <p className="eyebrow">Next.js 專案已建立</p>
        <h1>歡迎使用 codex-demo</h1>
        <p className="description">
          這是一個以 App Router 建立的全新 Next.js 專案骨架，已準備好讓你開始開發。
        </p>
        <div className="actions">
          <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
            閱讀文件
          </a>
          <a href="https://nextjs.org/learn" target="_blank" rel="noreferrer">
            開始學習
          </a>
        </div>
      </section>
    </main>
  );
}
