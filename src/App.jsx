/* 合规版页面：所有颜色、圆角、间距均通过 token 引用。
   这是 main 分支的基线，Design Bug Bot 的评审结果应视为"合规"对照。 */
export default function App() {
  return (
    <div className="card">
      <div className="card-title">订单详情</div>
      <p>合规基线页面：颜色、圆角、间距全部走 token。</p>
      <button className="button">确认提交</button>
    </div>
  )
}
