import { colors, radius, font } from './tokens'

// ── Layout ────────────────────────────────────────────────────────────────────
export const topBar = {
  wrapper:  { background:colors.green, color:colors.white, fontSize:font.size.xs, padding:'7px 40px',
    display:'flex', justifyContent:'space-between', alignItems:'center' },
  icons:    { display:'flex', gap:12, alignItems:'center' },
}

export const navbar = {
  wrapper:  { background:colors.white, padding:'0 40px', display:'flex', alignItems:'center', 
    justifyContent:'space-between', height:64, borderBottom:`1px solid ${colors.border}`, position:'sticky', 
    top:0, zIndex:100, boxShadow:'0 2px 8px rgba(0,0,0,0.05)' },
  left:     { display:'flex', alignItems:'center', gap:40 },
  logo:     { fontSize:font.size.xl, fontWeight:font.weight.black, letterSpacing:-0.5, cursor:'pointer', 
    textDecoration:'none', color:colors.text },
  nav:      { display:'flex', gap:28 },
  link:     { fontSize:font.size.md, color:colors.text, textDecoration:'none', fontWeight:font.weight.medium },
  cartBtn:  { display:'flex', alignItems:'center', gap:8, background:'none', border:'none', cursor:'pointer', 
    fontSize:font.size.md, fontWeight:font.weight.medium, textDecoration:'none', color:colors.text },
  badge:    { background:colors.green, color:colors.white, borderRadius:'50%', width:20, height:20, fontSize:11, 
    fontWeight:font.weight.bold, display:'inline-flex', alignItems:'center', justifyContent:'center' },
}

export const footer = {
  wrapper:  { background:colors.green, padding:'40px 40px 24px' },
  top:      { display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:28 },
  logo:     { fontSize:26, fontWeight:font.weight.black, color:colors.white },
  nav:      { display:'flex', gap:28 },
  link:     { color:'rgba(255,255,255,0.88)', fontSize:font.size.md, textDecoration:'none', 
    fontWeight:font.weight.medium },
  icons:    { display:'flex', gap:14, alignItems:'center' },
  bottom:   { borderTop:'1px solid rgba(255,255,255,0.25)', paddingTop:20, display:'flex', 
    justifyContent:'space-between' },
  copy:     { color:'rgba(255,255,255,0.75)', fontSize:font.size.sm },
}

// ── Sections ──────────────────────────────────────────────────────────────────
export const hero = {
  wrapper:  { width:'100%', height:280, overflow:'hidden' },
  img:      { width:'100%', height:'100%', objectFit:'cover' },
}

export const categoryCards = {
  wrapper:  { padding:'48px 60px 32px', display:'flex', gap:24 },
  card:     (hov) => ({ borderRadius:radius.lg, padding:'32px 40px', flex:1, minHeight:160, 
    display:'flex', alignItems:'center', justifyContent:'space-between', cursor:'pointer', 
    overflow:'hidden', transform:hov?'scale(1.02)':'scale(1)', transition:'all 0.2s ease', 
    boxShadow:hov?'0 8px 28px rgba(0,0,0,0.18)':'0 2px 8px rgba(0,0,0,0.08)' }),
  title:    { color:colors.white, fontSize:font.size.xl, fontWeight:font.weight.semibold, 
    margin:'0 0 14px', textShadow:'0 1px 3px rgba(0,0,0,0.2)' },
  shopBtn:  { background:colors.white, color:colors.text, border:'none', borderRadius:radius.pill, 
    padding:'8px 24px', fontSize:font.size.sm, fontWeight:font.weight.medium, cursor:'pointer' },
  toyImg:   (hov) => ({ width:110, height:110, objectFit:'contain', flexShrink:0, 
    filter:'drop-shadow(0 4px 12px rgba(0,0,0,0.2))', transform:hov?'scale(1.1)':'scale(1)', 
    transition:'transform 0.3s ease' }),
}

export const productSection = {
  wrapper:  { padding:'16px 60px 44px' },
  header:   { display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 },
  title:    { fontSize:font.size.xl, fontWeight:font.weight.bold, margin:0 },
  seeAll:   { color:colors.text, fontSize:font.size.md, textDecoration:'none', display:'flex', 
    alignItems:'center', gap:4 },
  underline:{ width:48, height:3, background:colors.green, borderRadius:2, marginBottom:28 },
  grid:     { display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:20 },
}

export const productCard = {
  wrapper:  (hov) => ({ background:colors.white, border:`1px solid ${hov?colors.green:colors.border}`, 
    borderRadius:radius.md, padding:'24px 16px 20px', textAlign:'center', cursor:'pointer', 
    transition:'all 0.2s ease', boxShadow:hov?'0 6px 20px rgba(124,179,66,0.18)':'0 1px 4px rgba(0,0,0,0.06)', 
    transform:hov?'translateY(-4px)':'none' }),
  imgBox:   { height:140, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:16 },
  img:      { maxHeight:130, maxWidth:'100%', objectFit:'contain' },
  name:     { margin:'0 0 8px', fontSize:font.size.md, color:colors.text, fontWeight:font.weight.semibold },
  priceBtn: { background:colors.green, color:colors.white, border:'none', borderRadius:radius.pill, padding:'7px 20px', 
    fontSize:font.size.sm, fontWeight:font.weight.semibold, cursor:'pointer' },
}

export const story = {
  wrapper:  { position:'relative', height:300, overflow:'hidden', display:'flex', alignItems:'center', 
    justifyContent:'center', flexDirection:'column', textAlign:'center' },
  img:      { position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' },
  overlay:  { position:'absolute', inset:0, background:colors.overlay },
  content:  { position:'relative', zIndex:1 },
  label:    { color:'rgba(255,255,255,0.7)', fontSize:font.size.sm, margin:'0 0 8px', letterSpacing:1, 
    textTransform:'uppercase' },
  title:    { color:colors.white, fontSize:font.size.h1, fontWeight:font.weight.bold, margin:'0 0 12px' },
  desc:     { color:'rgba(255,255,255,0.8)', fontSize:font.size.md, margin:'0 0 24px', maxWidth:480 },
  playBtn:  { background:colors.green, border:'none', borderRadius:'50%', width:52, height:52, display:'flex', 
    alignItems:'center', justifyContent:'center', cursor:'pointer', margin:'0 auto', 
    boxShadow:'0 4px 16px rgba(124,179,66,0.5)' },
}

export const feature = {
  wrapper:  { padding:'64px 60px', background:colors.white },
  header:   { textAlign:'center', marginBottom:48 },
  label:    { color:colors.green, fontSize:font.size.sm, fontWeight:font.weight.semibold, margin:'0 0 10px', 
    textTransform:'uppercase', letterSpacing:1 },
  title:    { fontSize:32, fontWeight:font.weight.bold, margin:0 },
  body:     { display:'flex', gap:60, alignItems:'center' },
  subtitle: { fontSize:font.size.lg, fontWeight:font.weight.bold, margin:'0 0 12px' },
  underline:{ width:40, height:3, background:colors.green, marginBottom:20, borderRadius:2 },
  desc:     { color:colors.textMuted, lineHeight:1.8, margin:'0 0 28px', fontSize:font.size.base },
  cta:      { background:colors.green, color:colors.white, border:'none', borderRadius:radius.pill, 
    padding:'12px 32px', fontSize:font.size.md, fontWeight:font.weight.bold, cursor:'pointer', letterSpacing:0.5 },
  imgBox:   { flex:1, borderRadius:radius.lg, overflow:'hidden' },
  img:      { width:'100%', height:340, objectFit:'cover', display:'block' },
}

export const newsletter = {
  section:  { padding:'0 60px 48px', background:colors.white },
  wrapper:  { background:colors.bg, borderRadius:radius.lg, padding:'32px 48px', display:'flex', 
    alignItems:'center', gap:32, justifyContent:'space-between' },
  left:     { display:'flex', alignItems:'center', gap:20 },
  iconBox:  { background:colors.green, borderRadius:'50%', width:56, height:56, display:'flex', 
    alignItems:'center', justifyContent:'center', flexShrink:0 },
  text:     { margin:0, fontWeight:font.weight.bold, fontSize:font.size.base },
  accent:   { color:colors.green },
  form:     { display:'flex', gap:12, alignItems:'center' },
  input:    { border:`1px solid ${colors.border}`, borderRadius:radius.sm, padding:'10px 18px', fontSize:font.size.md, 
    outline:'none', width:240, background:colors.white, fontFamily:'inherit' },
  btn:      { background:colors.green, color:colors.white, border:'none', borderRadius:radius.sm, padding:'10px 28px', 
    fontSize:font.size.md, fontWeight:font.weight.bold, cursor:'pointer', whiteSpace:'nowrap' },
  success:  { color:colors.green, fontWeight:font.weight.bold, fontSize:font.size.base },
}

export const instagram = {
  wrapper:  { padding:'40px 60px 56px', background:colors.white, textAlign:'center' },
  title:    { fontSize:font.size.xxl, fontWeight:font.weight.bold, margin:'0 0 36px' },
  grid:     { display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gap:12, marginBottom:40 },
  photoBox: { aspectRatio:'1', borderRadius:radius.md, overflow:'hidden', cursor:'pointer' },
  photo:    { width:'100%', height:'100%', objectFit:'cover', display:'block', transition:'transform 0.3s ease' },
  moreBtn:  { background:colors.green, color:colors.white, border:'none', borderRadius:radius.pill, 
    padding:'14px 40px', fontSize:font.size.base, fontWeight:font.weight.bold, cursor:'pointer' },
}

// ── Catalog ───────────────────────────────────────────────────────────────────
export const catalog = {
  page:        { background:colors.bg, minHeight:'100vh' },

  breadcrumbBar: { padding:'16px 60px 0' },
  breadcrumbPill:{ display:'inline-flex', alignItems:'center', gap:6, background:colors.white, 
    border:`1px solid ${colors.border}`, borderRadius:radius.pill, padding:'6px 18px', fontSize:font.size.sm, 
    color:colors.textMuted },
  breadcrumbLink:{ color:colors.textMuted, textDecoration:'none' },
  breadcrumbSep: { fontSize:font.size.sm, color:colors.border },
  breadcrumbCur: { color:colors.text, fontWeight:font.weight.medium },

  // 标题 + 筛选
  header:      { display:'flex', justifyContent:'space-between', alignItems:'center', padding:'28px 60px 0' },
  title:       { fontSize:font.size.xl, fontWeight:font.weight.bold, margin:0 },
  filters:     { display:'flex', gap:4, alignItems:'center', background:colors.white, 
    border:`1px solid ${colors.border}`, borderRadius:radius.pill, padding:'4px' },
  filterBtn:   (active) => ({
    padding:      '6px 20px',
    borderRadius: radius.pill,
    border:       'none',
    fontSize:     font.size.sm,
    fontWeight:   font.weight.semibold,
    cursor:       'pointer',
    background:   active ? colors.green : 'transparent',
    color:        active ? colors.white : colors.textMuted,
    transition:   'all 0.15s ease',
  }),

  underline:   { width:48, height:3, background:colors.green, borderRadius:2, margin:'12px 60px 24px' },
  grid:        { display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:20, padding:'0 60px 56px' },
}
// ── Breadcrumb ────────────────────────────────────────────────────────────────
export const breadcrumb = {
  bar:  { padding:'16px 60px 0' },
  pill: { display:'inline-flex', alignItems:'center', gap:6, background:colors.white, 
    border:`1px solid ${colors.border}`, borderRadius:radius.pill, padding:'6px 18px', 
    fontSize:font.size.sm, color:colors.textMuted },
  link: { color:colors.textMuted, textDecoration:'none' },
  sep:  { color:colors.border },
  cur:  { color:colors.text, fontWeight:font.weight.medium },
}

// ── Delivery ──────────────────────────────────────────────────────────────────
export const delivery = {
  page:      { background:colors.bg, minHeight:'100vh' },
  inner:     { padding:'40px 60px 60px', display:'flex', gap:48, alignItems:'flex-start' },
  left:      { flex:1 },
  pageTitle: { fontSize:font.size.xl, fontWeight:font.weight.bold, margin:'0 0 4px' },
  divider:   { width:48, height:3, background:colors.green, borderRadius:2, margin:'0 0 28px' },
  h2:        { fontSize:font.size.lg, fontWeight:font.weight.bold, margin:'0 0 10px' },
  p:         { color:colors.textMuted, lineHeight:1.8, margin:'0 0 24px', fontSize:font.size.base },
  li:        { color:colors.textMuted, lineHeight:2, fontSize:font.size.base },
  right:     { width:260, flexShrink:0 },
  sku:       { textAlign:'right', fontSize:font.size.sm, color:colors.textMuted, marginBottom:12 },
  specCard:  { background:colors.white, border:`1px solid ${colors.border}`, borderRadius:radius.md, 
    overflow:'hidden' },
  specRow:   { display:'flex', justifyContent:'space-between', padding:'14px 20px', 
    borderBottom:`1px solid ${colors.border}` },
  specLabel: { fontSize:font.size.sm, color:colors.textMuted },
  specValue: { fontSize:font.size.sm, color:colors.text, fontWeight:font.weight.medium },
}

// ── About ─────────────────────────────────────────────────────────────────────
export const about = {
  page:      { background:colors.bg, minHeight:'100vh' },
  intro:     { padding:'56px 60px 48px', textAlign:'center', maxWidth:680, margin:'0 auto' },
  label:     { color:colors.green, fontSize:font.size.sm, fontWeight:font.weight.semibold, textTransform:'uppercase', 
    letterSpacing:1, margin:'0 0 10px' },
  title:     { fontSize:32, fontWeight:font.weight.bold, margin:'0 0 16px' },
  desc:      { color:colors.textMuted, lineHeight:1.8, fontSize:font.size.base, margin:'0 0 20px' },
  moreLink:  { color:colors.text, fontWeight:font.weight.semibold, textDecoration:'none', fontSize:font.size.base, 
    borderBottom:`2px solid ${colors.text}`, paddingBottom:2 },
  // 固定背景图
  fixedBg:   { width:'100%', height:400, backgroundAttachment:'fixed', backgroundSize:'cover', 
    backgroundPosition:'center', backgroundRepeat:'no-repeat' },
  // 100% Responsive 双栏
  dualRow:   { padding:'56px 60px', background:colors.white, display:'flex', gap:56, alignItems:'center' },
  dualImg:   { flex:1, borderRadius:radius.lg, overflow:'hidden' },
  dualText:  { flex:1 },
  dualTitle: { fontSize:font.size.lg, fontWeight:font.weight.bold, margin:'0 0 12px' },
  dualLine:  { width:40, height:3, background:colors.green, borderRadius:2, margin:'0 0 16px' },
  dualDesc:  { color:colors.textMuted, lineHeight:1.8, fontSize:font.size.base, margin:'0 0 20px' },
  dualBtn:   { background:colors.green, color:colors.white, border:'none', borderRadius:radius.pill, 
    padding:'9px 24px', fontSize:font.size.sm, fontWeight:font.weight.bold, cursor:'pointer' },
}

// ── Contacts ──────────────────────────────────────────────────────────────────
export const contacts = {
  page:      { background:colors.bg, minHeight:'100vh' },
  mapBox:    { margin:'24px 60px 0', borderRadius:radius.md, overflow:'hidden', height:280 },
  body:      { padding:'40px 60px 60px', display:'flex', gap:60, alignItems:'flex-start' },
  formSide:  { flex:1 },
  formTitle: { fontSize:font.size.xl, fontWeight:font.weight.bold, margin:'0 0 24px' },
  label:     { display:'block', fontSize:font.size.sm, fontWeight:font.weight.medium, margin:'0 0 6px', 
    color:colors.text },
  input:     { width:'100%', border:`1px solid ${colors.border}`, borderRadius:radius.sm, padding:'10px 14px', 
    fontSize:font.size.md, outline:'none', fontFamily:'inherit', boxSizing:'border-box', marginBottom:18 },
  textarea:  { width:'100%', border:`1px solid ${colors.border}`, borderRadius:radius.sm, padding:'10px 14px', 
    fontSize:font.size.md, outline:'none', fontFamily:'inherit', boxSizing:'border-box', height:160, resize:'vertical' },
  sendBtn:   { background:colors.green, color:colors.white, border:'none', borderRadius:radius.sm, padding:'10px 28px', 
    fontSize:font.size.md, fontWeight:font.weight.bold, cursor:'pointer', marginTop:16 },
  infoSide:  { width:280, flexShrink:0 },
  infoTitle: { fontSize:font.size.xl, fontWeight:font.weight.bold, margin:'0 0 20px' },
  infoText:  { color:colors.textMuted, fontSize:font.size.sm, lineHeight:1.8, margin:'0 0 4px' },
  infoLink:  { color:colors.green, fontSize:font.size.sm, textDecoration:'none' },
  followTitle:{ fontSize:font.size.base, fontWeight:font.weight.bold, margin:'20px 0 12px' },
  socialRow: { display:'flex', gap:10 },
  socialBtn: (bg) => ({ background:bg, borderRadius:'50%', width:36, height:36, display:'flex', alignItems:'center', 
    justifyContent:'center', cursor:'pointer', border:'none' }),
}

// ── Detail ────────────────────────────────────────────────────────────────────
export const detail = {
  page:      { background:colors.bg, minHeight:'100vh' },
  card:      { background:colors.white, margin:'24px 60px 0', borderRadius:radius.lg, padding:'48px 56px' },
  top:       { display:'flex', gap:60, alignItems:'flex-start' },
  left:      { flex:1 },
  name:      { fontSize:36, fontWeight:font.weight.bold, margin:'0 0 16px' },
  desc:      { color:colors.textMuted, lineHeight:1.8, fontSize:font.size.base, margin:'0 0 20px' },
  price:     { color:colors.green, fontSize:22, fontWeight:font.weight.bold, margin:'0 0 24px' },
  qtyRow:    { display:'flex', gap:16, alignItems:'center' },
  qtyBox:    { display:'flex', alignItems:'center', gap:8, border:`1px solid ${colors.border}`, 
    borderRadius:radius.pill, padding:'8px 16px', background:colors.white },
  qtyNum:    { fontSize:font.size.base, fontWeight:font.weight.semibold, minWidth:24, textAlign:'center' },
  qtyBtn:    { background:'none', border:'none', cursor:'pointer', fontSize:14, color:colors.textMuted, display:'flex', 
    flexDirection:'column', gap:2 },
  addBtn:    (disabled) => ({ background: disabled ? colors.border : colors.green, color:colors.white, border:'none', 
    borderRadius:radius.pill, padding:'10px 36px', fontSize:font.size.base, fontWeight:font.weight.bold, 
    cursor: disabled ? 'not-allowed' : 'pointer' }),
  imgBox:    { flex:1, display:'flex', alignItems:'center', justifyContent:'center' },
  img:       { maxWidth:'100%', maxHeight:380, objectFit:'contain' },
  detailSec: { marginTop:40, paddingTop:32, borderTop:`1px solid ${colors.border}` },
  detailRow: { display:'flex', gap:48, alignItems:'flex-start' },
  detailLeft:{ flex:1 },
  detailH1:  { fontSize:font.size.xl, fontWeight:font.weight.bold, margin:'0 0 4px' },
  detailLine:{ width:48, height:3, background:colors.green, borderRadius:2, margin:'0 0 20px' },
  detailH2:  { fontSize:font.size.lg, fontWeight:font.weight.bold, margin:'0 0 10px' },
  detailP:   { color:colors.textMuted, lineHeight:1.8, fontSize:font.size.base, margin:'0 0 16px' },
  detailLi:  { color:colors.textMuted, lineHeight:2, fontSize:font.size.base },
  skuRow:    { display:'flex', justifyContent:'space-between', marginBottom:16 },
  sku:       { fontSize:font.size.sm, color:colors.textMuted },
  specCard:  { width:220, background:colors.white, border:`1px solid ${colors.border}`, borderRadius:radius.md, 
    overflow:'hidden', flexShrink:0 },
  specRow:   { display:'flex', justifyContent:'space-between', padding:'14px 20px', 
    borderBottom:`1px solid ${colors.border}` },
  specLabel: { fontSize:font.size.sm, color:colors.textMuted },
  specValue: { fontSize:font.size.sm, color:colors.text, fontWeight:font.weight.medium },
}

// ── CartModal ─────────────────────────────────────────────────────────────────
export const cartModal = {
  overlay:   { position:'fixed', inset:0, background:'rgba(0,0,0,0.45)', zIndex:1000, display:'flex', 
    alignItems:'center', justifyContent:'center' },
  box:       { background:colors.white, borderRadius:radius.lg, width:560, maxWidth:'90vw', maxHeight:'80vh', 
    overflowY:'auto', padding:'28px 32px' },
  header:    { display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20, paddingBottom:16, 
    borderBottom:`1px solid ${colors.border}` },
  title:     { fontSize:font.size.lg, fontWeight:font.weight.bold, margin:0 },
  closeBtn:  { background:'none', border:'none', cursor:'pointer', fontSize:22, color:colors.textMuted, lineHeight:1 },
  item:      { display:'flex', alignItems:'center', gap:16, padding:'14px 0', borderBottom:`1px solid ${colors.border}` },
  itemImg:   { width:52, height:52, objectFit:'contain', flexShrink:0 },
  itemInfo:  { flex:1 },
  itemName:  { fontSize:font.size.md, fontWeight:font.weight.semibold, margin:'0 0 4px' },
  itemPrice: { fontSize:font.size.sm, color:colors.textMuted, margin:'0 0 4px' },
  removeBtn: { background:'none', border:'none', cursor:'pointer', color:'#e53935', fontSize:font.size.sm, padding:0, 
    fontFamily:'inherit' },
  qtyBox:    { display:'flex', alignItems:'center', gap:6, border:`1px solid ${colors.border}`, borderRadius:radius.pill, 
    padding:'6px 14px', minWidth:72, justifyContent:'center' },
  qtyNum:    { fontSize:font.size.base, fontWeight:font.weight.semibold, minWidth:20, textAlign:'center' },
  qtyBtn:    { background:'none', border:'none', cursor:'pointer', color:colors.textMuted, display:'flex', 
    flexDirection:'column', gap:1, padding:0 },
  footer:    { marginTop:20 },
  subtotal:  { display:'flex', justifyContent:'space-between', marginBottom:20, fontSize:font.size.base },
  subtotalLabel:{ fontWeight:font.weight.normal },
  subtotalVal:  { fontWeight:font.weight.bold, fontSize:font.size.lg },
  checkoutBtn:  { width:'100%', background:colors.green, color:colors.white, border:'none', borderRadius:radius.pill, 
    padding:'14px', fontSize:font.size.base, fontWeight:font.weight.bold, cursor:'pointer' },
  emptyMsg:     { textAlign:'center', color:colors.textMuted, padding:'32px 0', fontSize:font.size.base },
}

// ── Cart Page ─────────────────────────────────────────────────────────────────
export const cartPage = {
  page:      { background:colors.bg, minHeight:'80vh', padding:'24px 60px 60px' },
  title:     { fontSize:font.size.xxl, fontWeight:font.weight.bold, margin:'24px 0 32px' },
  empty:     { textAlign:'center', color:colors.textMuted, padding:'80px 0', fontSize:font.size.lg },
  table:     { width:'100%', background:colors.white, borderRadius:radius.lg, overflow:'hidden', borderCollapse:'collapse' },
  th:        { padding:'16px 20px', textAlign:'left', fontSize:font.size.sm, color:colors.textMuted, 
    fontWeight:font.weight.medium, borderBottom:`1px solid ${colors.border}` },
  td:        { padding:'16px 20px', borderBottom:`1px solid ${colors.border}`, verticalAlign:'middle' },
  itemImg:   { width:56, height:56, objectFit:'contain' },
  itemName:  { fontSize:font.size.md, fontWeight:font.weight.semibold, margin:'0 0 4px' },
  itemPrice: { fontSize:font.size.sm, color:colors.textMuted },
  removeLink:{ background:'none', border:'none', cursor:'pointer', color:'#e53935', fontSize:font.size.sm, padding:0, 
    fontFamily:'inherit', textDecoration:'underline' },
  qtyBox:    { display:'inline-flex', alignItems:'center', gap:8, border:`1px solid ${colors.border}`, 
    borderRadius:radius.pill, padding:'6px 14px' },
  qtyBtn:    { background:'none', border:'none', cursor:'pointer', fontSize:16, fontWeight:font.weight.bold, 
    color:colors.textMuted },
  totalRow:  { display:'flex', justifyContent:'flex-end', gap:32, alignItems:'center', marginTop:28, paddingTop:20, 
    borderTop:`1px solid ${colors.border}` },
  totalLabel:{ fontSize:font.size.lg, fontWeight:font.weight.medium },
  totalVal:  { fontSize:22, fontWeight:font.weight.bold },
  checkoutBtn:{ background:colors.green, color:colors.white, border:'none', borderRadius:radius.pill, 
    padding:'12px 40px', fontSize:font.size.base, fontWeight:font.weight.bold, cursor:'pointer' },
}

// ── Admin ─────────────────────────────────────────────────────────────────────
export const admin = {
  page:      { background:colors.white, minHeight:'100vh', padding:'24px 40px' },
  topBar:    { display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:32 },
  pageTitle: { fontSize:font.size.xl, fontWeight:font.weight.bold, margin:0 },
  returnBtn: { background:'none', border:'none', cursor:'pointer', fontSize:font.size.md, color:colors.text, 
    textDecoration:'none' },
  addBtn:    { background:'#1976d2', color:colors.white, border:'none', borderRadius:radius.sm, padding:'8px 24px', 
    fontSize:font.size.md, fontWeight:font.weight.semibold, cursor:'pointer' },
  table:     { width:'100%', borderCollapse:'collapse' },
  th:        { textAlign:'left', padding:'12px 16px', borderBottom:`2px solid ${colors.border}`, fontSize:font.size.sm, 
    color:colors.textMuted, fontWeight:font.weight.medium },
  td:        { padding:'14px 16px', borderBottom:`1px solid ${colors.border}`, fontSize:font.size.sm, 
    verticalAlign:'middle' },
  img:       { width:48, height:48, objectFit:'contain' },
  descCell:  { maxWidth:200, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' },
  editBtn:   (enabled) => ({ background: enabled ? '#1976d2' : '#ccc', color:colors.white, border:'none', 
    borderRadius:radius.sm, padding:'5px 14px', fontSize:font.size.sm, cursor: enabled ? 'pointer' : 'not-allowed', 
    marginRight:6 }),
  delBtn:    (enabled) => ({ background: enabled ? '#e53935' : '#ccc', color:colors.white, border:'none', 
    borderRadius:radius.sm, padding:'5px 14px', fontSize:font.size.sm, cursor: enabled ? 'pointer' : 'not-allowed' }),
  pagination:{ display:'flex', justifyContent:'center', gap:8, marginTop:32 },
  pageBtn:   (active) => ({ width:36, height:36, borderRadius:radius.sm, 
    border:`1px solid ${active ? '#1976d2' : colors.border}`, background: active ? '#1976d2' : colors.white, 
    color: active ? colors.white : colors.text, cursor:'pointer', 
    fontSize:font.size.sm, fontWeight: active ? font.weight.bold : font.weight.normal }),
  // Modal
  modalOverlay: { position:'fixed', inset:0, background:'rgba(0,0,0,0.45)', zIndex:1000, display:'flex', 
    alignItems:'center', justifyContent:'center' },
  modalBox:     { background:colors.white, borderRadius:radius.lg, width:500, padding:'32px 36px', 
    maxHeight:'90vh', overflowY:'auto' },
  modalTitle:   { fontSize:font.size.lg, fontWeight:font.weight.bold, margin:'0 0 24px' },
  modalLabel:   { display:'block', fontSize:font.size.sm, fontWeight:font.weight.medium, margin:'0 0 6px' },
  modalInput:   { width:'100%', border:`1px solid ${colors.border}`, borderRadius:radius.sm, padding:'9px 12px', 
    fontSize:font.size.md, outline:'none', fontFamily:'inherit', boxSizing:'border-box', marginBottom:4 },
  modalSelect:  { width:'100%', border:`1px solid ${colors.border}`, borderRadius:radius.sm, padding:'9px 12px', 
    fontSize:font.size.md, outline:'none', fontFamily:'inherit', boxSizing:'border-box', marginBottom:4 },
  modalTextarea:{ width:'100%', border:`1px solid ${colors.border}`, borderRadius:radius.sm, padding:'9px 12px', 
    fontSize:font.size.md, outline:'none', fontFamily:'inherit', boxSizing:'border-box', height:100, resize:'vertical', 
    marginBottom:4 },
  errMsg:       { color:'#e53935', fontSize:font.size.xs, margin:'0 0 12px', display:'block' },
  modalFooter:  { display:'flex', justifyContent:'flex-end', gap:12, marginTop:20 },
  submitBtn:    { background:'#1976d2', color:colors.white, border:'none', borderRadius:radius.sm, padding:'9px 28px', 
    fontSize:font.size.md, fontWeight:font.weight.semibold, cursor:'pointer' },
  cancelBtn:    { background:colors.white, color:colors.text, border:`1px solid ${colors.border}`, borderRadius:radius.sm, 
    padding:'9px 28px', fontSize:font.size.md, cursor:'pointer' },
}
