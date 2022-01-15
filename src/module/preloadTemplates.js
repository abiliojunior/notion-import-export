export async function preloadTemplates() {
  const templatePaths = [
    // Add paths to "modules/notion-import-export/templates"
  ];

  return loadTemplates(templatePaths);
}
