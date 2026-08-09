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

// Function to generate a ~6000 word markdown file
function generateLongArticle(title) {
  let content = '# ' + title + '\n\n## Introduction\n\n'
  
  // Base paragraph is ~140 words. We need ~6000 words.
  // 6000 / 140 ≈ 43 paragraphs.
  
  for (let i = 0; i < 45; i++) {
    if (i % 5 === 0 && i !== 0) {
      content += '\n## Technical Deep Dive - Part ' + (i / 5) + '\n\n'
    }
    content += baseParagraph + '\\n\\n'
    
    // Add some variation
    if (i % 3 === 0) {
      content += 'Furthermore, the implications of this shift are profound for enterprise security. By keeping document intelligence isolated within a secure enclave, organizations can utilize powerful AI tools without violating strict compliance frameworks like HIPAA or GDPR. The vectors are calculated locally, stored locally, and queried locally.\n\n'
    }
  }
  
  content += '\n## Conclusion\n\nIn summary, the transition to local-first AI represents a paradigm shift in how we interact with technology. It is a necessary evolution to ensure privacy in an increasingly intelligent world.\n'
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
