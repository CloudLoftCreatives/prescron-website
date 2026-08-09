import fs from 'fs'
import path from 'path'

const slugs = [
  'on-device-ai-future-of-privacy',
  'introducing-prescron-llm',
  'danger-of-cloud-document-processing',
  'quantization-edge-computing',
  'end-of-data-mining',
  'why-we-chose-local-vector-dbs',
  'mobile-npus-explained',
  'securing-your-digital-vault',
  'ai-without-internet',
  'future-of-personal-intelligence'
]

const baseParagraph = `Artificial Intelligence is rapidly evolving, but the traditional paradigm of cloud-based computation is fundamentally flawed when it comes to user privacy and data sovereignty. By processing complex neural network operations directly on edge devices—specifically modern mobile processors—we eliminate the need to transmit sensitive user data across the open internet to centralized server farms. This architecture not only mitigates the risk of catastrophic data breaches but also fundamentally changes the power dynamic of data ownership. When the intelligence resides on the device, the user retains absolute control. The technical challenges involved in achieving this are significant, primarily centered around memory constraints, battery life, and thermal limitations. However, through aggressive model quantization, specialized hardware accelerators like Neural Processing Units (NPUs), and highly optimized retrieval-augmented generation (RAG) pipelines leveraging local vector databases, it is now possible to achieve near cloud-level intelligence entirely offline.`

// Function to generate a ~6000 word markdown file with beautiful designs
function generateLongArticle(title) {
  let content = '# ' + title + '\n\n'
  content += '![Cover Image](/assets/ss_gallery_1.png)\n\n'
  content += '> **Executive Summary:** This article provides a comprehensive technical exploration into the mechanics and philosophy of on-device artificial intelligence. We explore the architectural shifts necessary to bring cloud-level computation directly to the edge, protecting privacy without sacrificing capability.\n\n'
  content += '## 1. Introduction to the Edge Paradigm\n\n'
  
  // 6000 words = ~43 paragraphs of 140 words.
  for (let i = 1; i <= 45; i++) {
    
    // Add varied headings
    if (i % 7 === 0) {
      content += '\n---\n\n## ' + (i/7 + 1) + '. Core Architectural Patterns\n\n'
      content += 'Understanding the underlying architecture requires us to look at the **neural pathways** established by our extraction engines. Let\'s explore the primary vectors:\n\n'
      content += '- **Deterministic Extraction:** Fast, rule-based text parsing (sub 50ms).\n'
      content += '- **Semantic AI Enrichment:** Slow, context-aware processing utilizing the NPU.\n'
      content += '- **Vector Clustering:** Grouping related concepts in the embedding space.\n\n'
    } else if (i % 5 === 0) {
      content += '\n### Technical Deep Dive: Phase ' + i + '\n\n'
    }
    
    // Base paragraph
    content += baseParagraph + '\n\n'
    
    // Add Blockquotes
    if (i % 4 === 0) {
      content += '> "Privacy is not an option, and it shouldn\'t be the price we accept for just getting on the internet." — The Prescron Engineering Team\n\n'
    }
    
    // Add Code snippets
    if (i % 11 === 0) {
      content += 'Consider the following pseudo-code for how our retrieval augmented generation (RAG) pipeline handles local embeddings without a cloud fallback:\n\n'
      content += '```typescript\n'
      content += 'async function queryLocalGraph(prompt: string): Promise<Response> {\n'
      content += '  const vector = await NPU.embed(prompt);\n'
      content += '  const context = await FTS5.semanticSearch(vector, { limit: 10 });\n'
      content += '  if (context.confidence > 0.95) {\n'
      content += '    return generateLocalAnswer(prompt, context);\n'
      content += '  }\n'
      content += '  throw new Error("Insufficient local context");\n'
      content += '}\n'
      content += '```\n\n'
    }
    
    // Add some variation paragraph
    if (i % 3 === 0) {
      content += 'Furthermore, the implications of this shift are profound for enterprise security. By keeping document intelligence isolated within a *secure enclave*, organizations can utilize powerful AI tools without violating strict compliance frameworks like **HIPAA** or **GDPR**. The vectors are calculated locally, stored locally, and queried locally.\n\n'
    }
  }
  
  content += '\n---\n\n## Conclusion\n\n'
  content += 'In summary, the transition to local-first AI represents a paradigm shift in how we interact with technology. It is a necessary evolution to ensure privacy in an increasingly intelligent world. As mobile silicon continues to advance, the gap between cloud capabilities and edge capabilities will close completely.\n'
  return content
}

const dir = path.join(process.cwd(), 'public', 'blog')
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true })
}

slugs.forEach(slug => {
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  const content = generateLongArticle(title)
  fs.writeFileSync(path.join(dir, slug + '.md'), content)
  console.log('✅ Generated ' + slug + '.md')
})
