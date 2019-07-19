from glob import glob
import os
import pickle
from mlcomp.db.providers import ReportLayoutProvider, ReportLayout
from mlcomp.utils.misc import now


def upgrade(migrate_engine):
    folder = os.path.dirname(__file__)
    provider = ReportLayoutProvider()
    try:
        files = os.path.join(folder, '002', 'report_layout', '*.yml')
        for path in glob(files):
            name = os.path.basename(path).split('.')[0]
            text = open(path).read()
            provider.add(ReportLayout(
                name=name,
                content=pickle.dumps(text),
                last_modified=now()),
                commit=False)

        provider.commit()
    except:
        provider.rollback()
        raise


def downgrade(migrate_engine):
    provider = ReportLayoutProvider()
    provider.session.query(ReportLayout).delete(synchronize_session=False)
    provider.session.commit()
