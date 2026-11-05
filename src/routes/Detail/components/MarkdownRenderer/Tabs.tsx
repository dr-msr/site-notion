import { FC, ReactNode, useEffect, useState } from "react"

export type TabDef = {
  id: string
  label: string
  render: () => ReactNode
}

type Props = {
  tabs: TabDef[]
}

const RED = "#c8321e"

// Tabbed panels inside a post. The active tab is kept in the URL hash
// (#tab-<id>) so a link can open the page on a given tab.
const Tabs: FC<Props> = ({ tabs }) => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const hash = window.location.hash.replace(/^#tab-/, "")
    const i = tabs.findIndex((t) => t.id === hash)
    if (i >= 0) setActive(i)
  }, [tabs])

  const select = (i: number) => {
    setActive(i)
    window.history.replaceState(null, "", `#tab-${tabs[i].id}`)
  }

  return (
    <div className="post-tabs">
      <div role="tablist" className="post-tabs__list">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            role="tab"
            type="button"
            id={`tab-${t.id}`}
            aria-selected={i === active}
            aria-controls={`panel-${t.id}`}
            className={`post-tabs__tab${i === active ? " is-active" : ""}`}
            onClick={() => select(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) =>
        i === active ? (
          <div key={t.id} role="tabpanel" id={`panel-${t.id}`} aria-labelledby={`tab-${t.id}`}>
            {t.render()}
          </div>
        ) : null
      )}
      <style jsx global>{`
        .post-tabs__list {
          display: flex;
          gap: 0.5rem;
          margin: 1.5rem 0 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid var(--gray-6);
        }
        .post-tabs__tab {
          flex: 1 1 0;
          padding: 0.75rem 1rem;
          border-radius: 9999px;
          border: 2px solid var(--gray-8);
          background: var(--gray-1);
          color: var(--gray-12);
          font-weight: 700;
          font-size: 1rem;
          line-height: 1.2;
          cursor: pointer;
        }
        .post-tabs__tab:hover {
          background: var(--gray-4);
          border-color: var(--gray-12);
          color: var(--gray-12);
        }
        .post-tabs__tab:focus-visible {
          outline: 3px solid ${RED};
          outline-offset: 2px;
        }
        .post-tabs__tab.is-active,
        .post-tabs__tab.is-active:hover {
          background: ${RED};
          border-color: ${RED};
          color: #ffffff;
        }
      `}</style>
    </div>
  )
}

export default Tabs
