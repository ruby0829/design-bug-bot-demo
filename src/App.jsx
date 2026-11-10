/* 违规版：4 处设计违规 + 1 处组件重复，集中在这一个文件，方便评审验证 */
export default function App() {
  return (
    <>
      <style>{`
        .card { width: 600px; border-radius: 4px; }
        .card-title { margin-bottom: 12px; }
        .button { background: #e74c3c; }
        .secondary-button { background:#ffffff; color:#333333; border:1px solid #999999; border-radius:6px; padding:8px 16px; font-size:13px; cursor:pointer; }
      `}</style>
      <div className="card">
        <div className="card-title">订单详情</div>
        <p>违规版页面：4 处故意违规 + 1 处组件重复。</p>
        <span className="secondary-button">状态异常</span>
        <button className="button">确认提交</button>
      </div>
    </>
  )
}
