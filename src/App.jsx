import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Box,
  Zap,
  ShieldCheck,
  Globe2,
  Layers3,
  Code2,
  Network,
  Menu,
  X,
  Check,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "从想法到上线，只需片刻",
    desc: "简化每一次构建与交付，让团队将精力投入真正重要的产品创新。",
    tag: "DEVELOPER EXPERIENCE",
  },
  {
    icon: Globe2,
    title: "本地般的速度，全球可达",
    desc: "以边缘网络连接每一位用户，让流畅体验不再受地理距离限制。",
    tag: "GLOBAL INFRASTRUCTURE",
  },
  {
    icon: ShieldCheck,
    title: "可靠，融入每一层设计",
    desc: "从访问控制到流量防护，以清晰、可控的方式守护业务的每一步。",
    tag: "SECURITY BY DESIGN",
  },
];
export default function App() {
  const [menu, setMenu] = useState(false),
    [contact, setContact] = useState(false),
    [sent, setSent] = useState(false);
  return (
    <div className="bg-[#fafbff] text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <a
            href="#"
            className="flex items-center gap-2.5 text-2xl font-bold tracking-tight"
          >
            <Box className="text-indigo-600" size={29} />
            ESA Pages
          </a>
          <nav
            aria-label="主导航"
            className="hidden gap-8 text-sm text-slate-600 md:flex"
          >
            <a href="#platform" className="hover:text-indigo-600">
              产品与能力
            </a>
            <a href="#solutions" className="hover:text-indigo-600">
              解决方案
            </a>
            <a href="#about" className="hover:text-indigo-600">
              关于我们
            </a>
          </nav>
          <button
            onClick={() => {
              setContact(true);
              setSent(false);
            }}
            className="hidden items-center gap-5 rounded-lg bg-slate-900 px-5 py-2.5 text-sm text-white hover:bg-indigo-600 md:flex"
          >
            联系团队 <ArrowUpRight size={15} />
          </button>
          <button
            className="md:hidden"
            aria-label="切换导航"
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            <Menu />
          </button>
        </div>
        {menu && (
          <nav className="flex flex-wrap justify-center gap-6 p-4 text-sm">
            <a onClick={() => setMenu(false)} href="#platform">
              产品能力
            </a>
            <a onClick={() => setMenu(false)} href="#solutions">
              解决方案
            </a>
            <button
              onClick={() => {
                setContact(true);
                setMenu(false);
              }}
            >
              联系团队
            </button>
          </nav>
        )}
      </header>
      <main>
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_30%,#dddfff_0%,transparent_60%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-12 lg:py-28">
            <div>
              <a
                href="#platform"
                className="mb-7 inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-3 py-1.5 text-xs text-indigo-700"
              >
                <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] text-white">
                  NEW
                </span>
                为每一种可能，提供技术底座 <ChevronRight size={14} />
              </a>
              <h1 className="text-4xl font-semibold leading-[1.3] tracking-tight sm:text-6xl sm:leading-[1.2]">
                让技术的力量，
                <br />
                <span className="bg-linear-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
                  成就下一个突破。
                </span>
              </h1>
              <p className="mt-7 max-w-lg text-base leading-8 text-slate-500">
                ESA Pages 为富有远见的团队构建现代数字基础设施。
                <br className="hidden sm:block" />
                连接创意与技术，让你的业务从容迈向全球。
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setContact(true);
                    setSent(false);
                  }}
                  className="flex items-center gap-6 rounded-lg bg-indigo-600 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700"
                >
                  开启合作 <ArrowRight size={17} />
                </button>
                <a
                  href="#platform"
                  className="rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm hover:border-indigo-300"
                >
                  探索产品能力
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-5 text-xs text-slate-500">
                {["面向开发者", "以可靠性为先", "为增长而设计"].map((x) => (
                  <span key={x} className="flex items-center gap-1.5">
                    <Check size={13} className="text-indigo-600" />
                    {x}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[500px] py-8">
              <div className="rounded-2xl border border-white bg-white/80 p-5 shadow-[0_30px_100px_#6366f12a] backdrop-blur-xl sm:p-7">
                <div className="mb-7 flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="flex items-center gap-2 text-sm font-semibold">
                    <Network size={17} className="text-indigo-600" />
                    ESA Pages Edge Network
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] text-emerald-600">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    ALL SYSTEMS ONLINE
                  </span>
                </div>
                <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-xl bg-[#f4f5ff]">
                  <div className="absolute size-48 rounded-full border border-indigo-200" />
                  <div className="absolute size-32 rounded-full border border-dashed border-indigo-300" />
                  <div className="absolute h-px w-full -rotate-30 bg-indigo-200" />
                  <div className="absolute h-px w-full rotate-30 bg-indigo-200" />
                  <div className="relative z-10 grid size-20 place-items-center rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-400/30">
                    <Box size={40} strokeWidth={1.2} />
                  </div>
                  {[
                    ["top-5 left-8", "SFO"],
                    ["top-5 right-8", "FRA"],
                    ["bottom-5 left-8", "SIN"],
                    ["bottom-5 right-8", "HKG"],
                  ].map(([pos, l]) => (
                    <div
                      key={l}
                      className={`absolute ${pos} rounded-lg border border-indigo-100 bg-white px-3 py-2 text-[10px] font-semibold text-indigo-600 shadow-sm`}
                    >
                      {l}
                      <span className="ml-2 inline-block size-1.5 rounded-full bg-emerald-400" />
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-3 divide-x divide-slate-100 text-center">
                  {[
                    ["32ms", "平均响应"],
                    ["99.99%", "目标可用性"],
                    ["200+", "示例边缘节点"],
                  ].map(([n, l]) => (
                    <div key={l}>
                      <p className="text-xl font-semibold">{n}</p>
                      <p className="mt-1 text-[10px] text-slate-400">{l}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-right text-[9px] tracking-widest text-slate-400">
                  ILLUSTRATIVE PLATFORM METRICS
                </p>
              </div>
              <div className="absolute -bottom-1 left-5 flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-5 py-3 shadow-lg">
                <span className="grid size-8 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                  <Check size={16} />
                </span>
                <div>
                  <p className="text-xs font-medium">部署已完成</p>
                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Your next idea is now live.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="border-y border-slate-200/60 bg-white px-6 py-9">
          <p className="mb-6 text-center text-[10px] tracking-[.2em] text-slate-400">
            为不同领域的创新团队而设计 · 示例品牌
          </p>
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-16 gap-y-6 text-xl font-semibold tracking-tight text-slate-400">
            {["◈ Acme", "LUMINO", "⊞ Quantum", "layers", "✳ Spherule"].map(
              (x) => (
                <span key={x}>{x}</span>
              ),
            )}
          </div>
        </section>
        <section
          id="platform"
          className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 lg:px-12"
        >
          <p className="text-xs font-semibold tracking-[.18em] text-indigo-600">
            BUILT FOR WHAT’S NEXT
          </p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-3xl font-semibold leading-snug sm:text-4xl">
              复杂的技术，
              <br />
              简单的可能。
            </h2>
            <p className="max-w-sm text-sm leading-7 text-slate-500">
              让基础设施隐于幕后，让产品价值走到台前。
              <br />
              一套为现代业务而生的完整能力。
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-100/50"
              >
                <f.icon
                  className="mb-10 text-indigo-600"
                  size={28}
                  strokeWidth={1.5}
                />
                <p className="mb-3 text-[9px] tracking-widest text-slate-400">
                  {f.tag}
                </p>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {f.desc}
                </p>
              </article>
            ))}
          </div>
        </section>
        <section
          id="solutions"
          className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-24 lg:px-12"
        >
          <div className="grid gap-12 rounded-3xl bg-[#11152d] p-8 text-white md:grid-cols-2 md:p-14">
            <div>
              <p className="mb-4 text-xs tracking-widest text-indigo-300">
                ONE PLATFORM. ENDLESS POSSIBILITIES.
              </p>
              <h2 className="text-3xl font-semibold leading-relaxed">
                为你的行业，
                <br />
                找到更好的答案。
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                无论是下一代 SaaS、内容平台，还是全球电商，ESA Pages
                都让你的团队轻装上阵。
              </p>
              <button
                onClick={() => {
                  setContact(true);
                  setSent(false);
                }}
                className="mt-7 inline-flex items-center gap-4 text-sm text-indigo-200"
              >
                和解决方案团队聊聊 <ArrowRight size={17} />
              </button>
            </div>
            <div className="grid gap-3">
              {[
                [Code2, "开发者与 SaaS", "把更多时间留给产品"],
                [Layers3, "品牌与数字体验", "每一次访问都值得期待"],
                [Globe2, "全球化业务", "从第一位用户到全球市场"],
              ].map(([Icon, t, d]) => (
                <div
                  key={t}
                  className="flex items-center gap-5 rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <Icon className="text-indigo-300" size={24} />
                  <div>
                    <h3 className="text-sm font-medium">{t}</h3>
                    <p className="mt-1 text-xs text-slate-400">{d}</p>
                  </div>
                  <ArrowUpRight className="ml-auto text-slate-500" size={17} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="about"
          className="mx-auto max-w-3xl px-6 pb-24 text-center"
        >
          <p className="text-xs font-semibold tracking-widest text-indigo-600">
            OUR BELIEF
          </p>
          <h2 className="mt-5 text-3xl font-semibold leading-relaxed">
            技术应该放大创造力，
            <br />
            而不是成为它的边界。
          </h2>
          <p className="mt-6 text-sm leading-8 text-slate-500">
            我们是一群相信长期价值的工程师、设计师与问题解决者。以开放的心态、扎实的技术，与每一位合作伙伴共同成长。
          </p>
        </section>
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-6 px-6 py-9 text-xs text-slate-400 lg:px-12">
          <span className="text-lg font-semibold text-slate-800">ESA Pages</span>
          <p>© 2026 ESA Pages · 企业官网演示模板</p>
          <a href="mailto:hello@example.com" className="hover:text-indigo-600">
            hello@example.com ↗
          </a>
        </div>
      </footer>
      {contact && (
        <Modal onClose={() => setContact(false)}>
          <section
            aria-label="联系团队"
            onKeyDown={(e) => e.key === "Escape" && setContact(false)}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
          >
            <button
              autoFocus
              aria-label="关闭联系表单"
              onClick={() => setContact(false)}
              className="absolute right-5 top-5 p-1"
            >
              <X size={20} />
            </button>
            {sent ? (
              <div role="status" className="py-8 text-center">
                <Check className="mx-auto mb-4 text-indigo-600" size={38} />
                <h2 className="text-2xl font-semibold">感谢你的兴趣</h2>
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  这是表单交互演示，信息未发送或存储。
                  <br />
                  接入你的表单服务后，即可用于真实业务。
                </p>
              </div>
            ) : (
              <>
                <h2 className="mb-3 text-2xl font-semibold">
                  一起开启新的可能
                </h2>
                <p className="mb-6 text-sm text-slate-500">
                  留下你的想法，让合作从这里开始。
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="grid gap-5"
                >
                  <label className="grid gap-2 text-sm">
                    你的姓名
                    <input
                      name="name"
                      required
                      autoComplete="name"
                      className="rounded-lg border border-slate-200 px-3 py-2.5"
                      placeholder="如何称呼你"
                    />
                  </label>
                  <label className="grid gap-2 text-sm">
                    工作邮箱
                    <input
                      name="email"
                      required
                      type="email"
                      autoComplete="email"
                      className="rounded-lg border border-slate-200 px-3 py-2.5"
                      placeholder="you@company.com"
                    />
                  </label>
                  <button className="rounded-lg bg-indigo-600 py-3 text-sm font-medium text-white">
                    发送合作意向
                  </button>
                  <p className="text-xs text-slate-400">
                    演示表单，不会发送或保存个人信息。
                  </p>
                </form>
              </>
            )}
          </section>
        </Modal>
      )}
    </div>
  );
}

function Modal({ children, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    dialog.showModal();
    return () => dialog.close();
  }, []);
  return (
    <dialog
      ref={ref}
      aria-label="联系团队"
      onCancel={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-40px)] max-w-lg overflow-y-auto rounded-3xl border-0 bg-transparent p-0 text-inherit backdrop:bg-black/65 backdrop:backdrop-blur-sm"
    >
      {children}
    </dialog>
  );
}
