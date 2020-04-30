let project = new Project('New Project');
project.addAssets('Assets/**');
project.addShaders('Shaders/**');
project.addSources('Sources');
project.addLibrary('rice2d');
project.addParameter('scripts');
project.addParameter("--macro keep('scripts')");
resolve(project);
