import { useEffect } from 'react';

type scriptInline = {
  type: any;
  async: any;
  innerHTML: any;
};

export default function RenderScript({ children }: any) {
  useEffect(() => {
    const s: Node & scriptInline = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = children;
    document.body.appendChild(s);
  });
  // // const inlineScript = '(() => { console.log("Hello World!") })();';
  // const script = `<script>(() => {console.log('hehe')})();</script>`;
  // return <div dangerouslySetInnerHTML={{ __html: script }} />;
  // console.log(children.toString());
  // return <script>{children}</script>;
  return null;
}
