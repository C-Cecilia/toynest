// import { useState } from 'react'
import {useSearchParams, Link } from 'react-router-dom'
import { catalog as S } from '../styles/components'
import ProductCard   from '../components/ui/ProductCard'
import Newsletter    from '../components/sections/Newsletter'
import InstagramGrid from '../components/sections/InstagramGrid'
import products from '../data/products'

// ─── 筛选配置 ─────────────────────────────────────────────────────────────────
const FILTERS = [
  { key: 'all',     label: 'All Toys'        },
  { key: 'wooden',  label: 'Wooden Toys'     },
  { key: 'stuffed', label: 'Stuffed Animals' },
]

// ─── Catalog Page ─────────────────────────────────────────────────────────────
const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeFilter = searchParams.get('category') || 'all'

  const filtered = activeFilter === 'all'
  ? products
  : products.filter(p => p.type === activeFilter)

  return (
    <div style={S.page}>

      <div style={S.breadcrumbBar}>
        <div style={S.breadcrumbPill}>
          <Link to="/" style={S.breadcrumbLink}>Home</Link>
          <span style={S.breadcrumbSep}>→</span>
          <span style={S.breadcrumbCur}>Catalog</span>
        </div>
      </div>

      <div style={S.header}>
        <h1 style={S.title}>All Toys</h1>
        <div style={S.filters}>
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              style={S.filterBtn(activeFilter === key)}
              onClick={() => setSearchParams(key === 'all' ? {} : { category: key })}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div style={S.underline} />

      <div style={S.grid}>
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Newsletter />
      <InstagramGrid />

    </div>
  )
}

export default Catalog
