export default function Section({ title, children, ...props }) {   // ...props: wrap any left props into this props object with three dots operator, props forwarding pattern
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

//  this section component is the first additional component added to this project to show this props forwarding pattern





