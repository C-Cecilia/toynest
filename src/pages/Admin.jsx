import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProducts }  from '../context/ProductContext'
import { admin as S }   from '../styles/components'

const PAGE_SIZE    = 6
const DEFAULT_COUNT = 16  // 前 16 条不可编辑/删除

// ─── 表单弹窗 ─────────────────────────────────────────────────────────────────
const EMPTY_FORM = { imgUrl:'', name:'', price:'', type:'', describe:'' }

const ProductModal = ({ mode, initial, onSubmit, onCancel }) => {
  const [form, setForm]   = useState(initial || EMPTY_FORM)
  const [errors, setErrors] = useState({})

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const validate = () => {
    const e = {}
    if (!form.imgUrl)   e.imgUrl   = '请上传商品图片'
    if (!form.name)     e.name     = '请输入商品名称'
    if (!form.price)    e.price    = '请输入商品价格'
    if (!form.type)     e.type     = '请输入商品类型'
    if (!form.describe) e.describe = '请输入商品描述'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = () => {
    if (validate()) onSubmit({ ...form, price: parseFloat(form.price) })
  }

  const Field = ({ label, fkey, type = 'text', placeholder }) => (
    <div style={{ marginBottom: errors[fkey] ? 0 : 16 }}>
      <label style={S.modalLabel}>{label}</label>
      <input
        type={type}
        value={form[fkey]}
        onChange={e => set(fkey, e.target.value)}
        placeholder={placeholder}
        style={{ ...S.modalInput, borderColor: errors[fkey] ? '#e53935' : undefined }}
      />
      {errors[fkey] && <span style={S.errMsg}>{errors[fkey]}</span>}
    </div>
  )

  return (
    <div style={S.modalOverlay} onClick={onCancel}>
      <div style={S.modalBox} onClick={e => e.stopPropagation()}>
        <h2 style={S.modalTitle}>{mode === 'add' ? '添加商品' : '编辑商品'}</h2>

        <Field label="商品图片：" fkey="imgUrl"   placeholder="请输入图片URL" />
        <Field label="商品名称：" fkey="name"     placeholder="请输入商品名称" />
        <Field label="商品价格：" fkey="price"    placeholder="请输入商品价格" type="number" />

        <div style={{ marginBottom: errors.type ? 0 : 16 }}>
          <label style={S.modalLabel}>商品类型：</label>
          <select
            value={form.type}
            onChange={e => set('type', e.target.value)}
            style={{ ...S.modalSelect, borderColor: errors.type ? '#e53935' : undefined }}
          >
            <option value="">请选择商品类型</option>
            <option value="stuffed">stuffed</option>
            <option value="wooden">wooden</option>
          </select>
          {errors.type && <span style={S.errMsg}>{errors.type}</span>}
        </div>

        <div style={{ marginBottom: errors.describe ? 0 : 16 }}>
          <label style={S.modalLabel}>商品描述：</label>
          <textarea
            value={form.describe}
            onChange={e => set('describe', e.target.value)}
            placeholder="请输入商品描述"
            style={{ ...S.modalTextarea, borderColor: errors.describe ? '#e53935' : undefined }}
          />
          {errors.describe && <span style={S.errMsg}>{errors.describe}</span>}
        </div>

        <div style={S.modalFooter}>
          <button style={S.submitBtn} onClick={handleSubmit}>提交</button>
          <button style={S.cancelBtn} onClick={onCancel}>取消</button>
        </div>
      </div>
    </div>
  )
}

// ─── Admin Page ───────────────────────────────────────────────────────────────
const Admin = () => {
  const navigate = useNavigate()
  const { products, addProduct, editProduct, deleteProduct } = useProducts()

  const [page, setPage]       = useState(1)
  const [modal, setModal]     = useState(null)   // null | 'add' | { mode:'edit', product }

  const totalPages = Math.ceil(products.length / PAGE_SIZE)
  const pageItems  = products.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const handleAdd = (form) => {
    addProduct(form)
    setModal(null)
    setPage(totalPages + (products.length % PAGE_SIZE === 0 ? 1 : 0))
  }

  const handleEdit = (form) => {
    editProduct(modal.product.id, form)
    setModal(null)
  }

  const handleDelete = (id) => {
    deleteProduct(id)
    if (pageItems.length === 1 && page > 1) setPage(p => p - 1)
  }

  const isDefault = (product) => product.id <= 1000 + DEFAULT_COUNT

  return (
    <div style={S.page}>
      {/* 顶栏 */}
      <div style={S.topBar}>
        <h1 style={S.pageTitle}>Product Management</h1>
        <button style={S.returnBtn} onClick={() => navigate('/catalog')}>
          Return to Home
        </button>
        <button style={S.addBtn} onClick={() => setModal('add')}>add</button>
      </div>

      {/* 表格 */}
      <table style={S.table}>
        <thead>
          <tr>
            {['ID','Image','Name','Price','Type','Describe','Operate'].map(h => (
              <th key={h} style={S.th}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pageItems.map(p => (
            <tr key={p.id}>
              <td style={S.td}>{p.id}</td>
              <td style={S.td}>
                <img src={p.imgUrl} alt={p.name} style={S.img} />
              </td>
              <td style={S.td}>{p.name}</td>
              <td style={S.td}>${p.price}</td>
              <td style={S.td}>{p.type}</td>
              <td style={{ ...S.td, ...S.descCell }}>
                {p.describe?.slice(0, 30)}...
              </td>
              <td style={S.td}>
                <button
                  style={S.editBtn(!isDefault(p))}
                  disabled={isDefault(p)}
                  onClick={() => !isDefault(p) && setModal({ mode:'edit', product:p })}
                >
                  Edit
                </button>
                <button
                  style={S.delBtn(!isDefault(p))}
                  disabled={isDefault(p)}
                  onClick={() => !isDefault(p) && handleDelete(p.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 分页 */}
      <div style={S.pagination}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
          <button key={n} style={S.pageBtn(n === page)} onClick={() => setPage(n)}>
            {n}
          </button>
        ))}
      </div>

      {/* 弹窗 */}
      {modal === 'add' && (
        <ProductModal mode="add" onSubmit={handleAdd} onCancel={() => setModal(null)} />
      )}
      {modal?.mode === 'edit' && (
        <ProductModal
          mode="edit"
          initial={{ ...modal.product, price: String(modal.product.price) }}
          onSubmit={handleEdit}
          onCancel={() => setModal(null)}
        />
      )}
    </div>
  )
}

export default Admin
