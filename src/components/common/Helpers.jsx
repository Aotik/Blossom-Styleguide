import jsHTML from 'js-beautify'
import hl from 'highlightjs'
import esc from 'escape-html'

let options = {
  "indent_size": 4,
  "unformatted": ['abbr', 'area', 'audio', 'b', 'bdi', 'bdo', 'br', 'button', 'canvas', 'cite', 'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'iframe', 'ins', 'kbd', 'keygen', 'label', 'map', 'mark', 'math', 'meter', 'noscript', 'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'select', 'small', 'strong', 'sub', 'sup', 'svg', 'template', 'time', 'u', 'var', 'video', 'wbr', 'text', 'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt']
}

export function BuildFooter(nearestModule) {
  let nearestFooter = $(nearestModule).find('.footer:not(.content)')
  $(nearestFooter).empty().html('<pre><code class="html"></code></pre>')
  let content = $(nearestModule).clone().find('.footer').remove().end().html().replace(new RegExp(/<!--(.*?)-->/g), "")
  let formattedHTML = jsHTML.html(content, options)
  $(nearestFooter).find('code').html(esc(formattedHTML))
  hl.highlightBlock($(nearestFooter).find('code').get(0))
}

export function HighlightCode() {
  hl.configure({languages: []})
  $('pre code').each((i, block) => {
    hl.highlightBlock(block)
  })
}
