import { Fragment, type ReactNode } from 'react'
import Link from 'next/link'
import { ChartRenderer } from './ChartRenderer'

/**
 * Renders a Payload Lexical richText body to styled React, matching the
 * existing article typography, plus custom "chart" blocks and inline images.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
type Lex = any

const IS_BOLD = 1
const IS_ITALIC = 2
const IS_STRIKE = 4
const IS_UNDERLINE = 8
const IS_CODE = 16

function renderText(node: Lex, key: number): ReactNode {
  let el: ReactNode = node.text ?? ''
  const f: number = node.format ?? 0
  if (f & IS_CODE) el = <code className="rounded bg-ink-100 px-1.5 py-0.5 text-[0.9em]">{el}</code>
  if (f & IS_BOLD) el = <strong>{el}</strong>
  if (f & IS_ITALIC) el = <em>{el}</em>
  if (f & IS_UNDERLINE) el = <u>{el}</u>
  if (f & IS_STRIKE) el = <s>{el}</s>
  return <Fragment key={key}>{el}</Fragment>
}

function renderChildren(children: Lex[] = []): ReactNode {
  return children.map((c, i) => renderNode(c, i))
}

function renderNode(node: Lex, key: number): ReactNode {
  switch (node?.type) {
    case 'text':
      return renderText(node, key)
    case 'linebreak':
      return <br key={key} />
    case 'paragraph':
      return (
        <p key={key} className="text-[1.02rem] leading-[1.8] text-ink-600">
          {renderChildren(node.children)}
        </p>
      )
    case 'heading':
      return node.tag === 'h3' ? (
        <h3 key={key} className="pt-4 text-xl font-bold tracking-tight text-ink-900">
          {renderChildren(node.children)}
        </h3>
      ) : (
        <h2 key={key} className="flex items-center gap-3 pt-8 text-2xl font-bold tracking-tight text-ink-900">
          <span className="h-5 w-1.5 shrink-0 rounded-full bg-flame-500" aria-hidden />
          {renderChildren(node.children)}
        </h2>
      )
    case 'list': {
      const Tag = (node.tag === 'ol' ? 'ol' : 'ul') as 'ul' | 'ol'
      return (
        <Tag key={key} className="my-5 space-y-2.5 pl-1">
          {renderChildren(node.children)}
        </Tag>
      )
    }
    case 'listitem':
      return (
        <li key={key} className="flex gap-3 text-ink-600">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-flame-500" aria-hidden />
          <span className="leading-relaxed">{renderChildren(node.children)}</span>
        </li>
      )
    case 'quote':
      return (
        <blockquote key={key} className="border-l-2 border-flame-500 pl-4 italic text-ink-600">
          {renderChildren(node.children)}
        </blockquote>
      )
    case 'link': {
      const url: string = node.fields?.url ?? '#'
      const newTab = node.fields?.newTab
      return (
        <Link
          key={key}
          href={url}
          {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="text-flame-700 underline underline-offset-2"
        >
          {renderChildren(node.children)}
        </Link>
      )
    }
    case 'block': {
      const f = node.fields ?? {}
      if (f.blockType === 'chart') {
        return <ChartRenderer key={key} kind={f.kind} title={f.title} caption={f.caption} data={f.data} />
      }
      return null
    }
    case 'upload': {
      const doc = node.value
      const url = doc && typeof doc === 'object' ? doc.url : undefined
      if (!url) return null
      return (
        <figure key={key} className="my-8">
          <div className="overflow-hidden rounded-2xl border border-ink-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={url} alt={doc.alt ?? ''} className="h-auto w-full" />
          </div>
          {doc.caption && <figcaption className="mt-2 text-xs text-ink-400">{doc.caption}</figcaption>}
        </figure>
      )
    }
    default:
      return node?.children ? <Fragment key={key}>{renderChildren(node.children)}</Fragment> : null
  }
}

export function LexicalBody({ data }: { data: Lex }) {
  const children: Lex[] = data?.root?.children ?? []
  return (
    <div className="mx-auto max-w-[46rem] space-y-5 px-5 sm:px-8">
      {children.map((c, i) => renderNode(c, i))}
    </div>
  )
}
/* eslint-enable @typescript-eslint/no-explicit-any */
