export class CustomOs{

    constructor(name, terminalInstance){

        this.terminalInstance = this.terminalInstance; 

        this.name = name;

        this.fileStructures = {
            root: {}
        }

        terminalInstance.echo("Created OS with name: " + name);

    }

    ls(rel_path='root'){
        let paths = rel_path.split('/');
        alert(paths.length);
        let lookUpInstance = paths.reduce((prev, curr) => prev[curr], this.fileStructures);
        alert(lookUpInstance)
        this.terminalInstance.echo(Object.keys(lookUpInstance).map((val) => {
            return `${typeof lookUpInstance[val] === 'object' ? 'Folder' : 'File'}: ${typeof lookUpInstance[val] === 'object' ? `${Object.entries(lookUpInstance[val]).length  === 0 ? "Empty Space, BOI!!" : Object.entries(lookUpInstance[val]).length} Items` : lookUpInstance[val]}\n`
        }))
    }

    mkdir(rel_path='root', folder_name='Untitled'){
        let currPos = paths.reduce((prev, curr) => prev[curr], this.fileStructures);
        currPos[folder_name] = {};
    }

}

export default datastructures = {
    CustomOs
}
