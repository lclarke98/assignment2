const {Datastore} = require('@google-cloud/datastore');
const ds = new Datastore({ namespace: 'tutorial' });

const kind = 'files';

function key(id) {
  return ds.key([kind, id]);
}

module.exports.post = async (id, val) => {
  const entity = {
    key: key(id),
    data: { name: id, val },
  }
  await ds.save(entity);
};

module.exports.put = async (id, val) => {
  const entity = {
    key: key(id),
    data: { name: id, val },
  }
  await ds.save(entity);
};