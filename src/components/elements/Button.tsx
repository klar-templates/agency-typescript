export default function Button({type, target, size, color, to, children}: any) {
   //      <a href="#pricing" className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 ">
              //  <span>Get this template <span aria-hidden="true" className="text-black/25">→</span></span></a>
    let classes;
    if (size === 'lg' && type === 'filled-inverse') {
      classes = 'inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-inverse-background text-inverse-on-background hover:bg-inverse-surface';
    } else if (size === 'lg' && type === 'filled-primary') {
      classes = 'inline-flex text-on-primary rounded-lg bg-indigo-600 px-4 py-1.5 text-sm font-semibold leading-7 shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700';
    } else if (size === 'lg' && type === 'filled-tonal') {
      classes = 'inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 ';
      // classes = 'inline-flex text-on-background rounded-lg bg-surface-variant px-4 py-1.5 text-sm font-semibold leading-7 shadow-sm hover:shadow-lg';
    } else {
      return null;
    }

    if (to) {
      return (
        <a href={to} className={classes} target={target ? target : undefined}>
          <span className="inline-flex items-center">
            <span>{children}
            {/* {' '}<span aria-hidden="true" className="text-black/25">→</span> */}
            </span>
          </span>
        </a>
        );
    }
    return (
      <button type="button" className={classes}>
        <span className="inline-flex items-center">
          <span>{children} </span>
        </span>
      </button>

  );
}