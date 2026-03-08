/**
 * Antora extension: AI help, vector search over docs, cached Q&A.
 * Registers build-time hooks to produce vector index and AI response store manifest.
 *
 * @see docs/design/antora-ai-help-extension-spec.adoc
 */

module.exports.register = function ({ config }) {
  const logger = this.getLogger('antora-supplemental')

  this.on('contentAggregated', ({ contentCatalog }) => {
    // TODO: walk contentCatalog + AI store, build vector index and write to output
    logger.info('Extension loaded; vector index build not yet implemented.')
  })
}
