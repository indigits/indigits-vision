"""A setuptools based setup module.
"""
import io
import re
from glob import glob
from os.path import basename
from os.path import dirname
from os.path import join
from os.path import splitext

# Always prefer setuptools over distutils
from setuptools import setup, find_namespace_packages
# To use a consistent encoding
from codecs import open
from os import path

here = path.abspath(path.dirname(__file__))

def read(*names, **kwargs):
    with io.open(
        join(dirname(__file__), *names),
        encoding=kwargs.get('encoding', 'utf8')
    ) as fh:
        return fh.read()

# Get the long description from the README file
with open(path.join(here, 'README.rst'), encoding='utf-8') as f:
    long_description = f.read()

setup(
    name='cr-vision',

    # Versions should comply with PEP440.  For a discussion on single-sourcing
    # the version across setup.py and the project code, see
    # https://packaging.python.org/en/latest/single_source_version.html
    version='0.1.0',

    description='Tools for Computer Vision',
    long_description=long_description,

    # The project's main homepage.
    url='',

    # Author details
    author='Carnot Research Pvt. Ltd.',
    author_email='contact@carnotresearch.com',

    # Choose your license
    license='Apache 2.0: http://www.apache.org/licenses/LICENSE-2.0',

    # See https://pypi.python.org/pypi?%3Aaction=list_classifiers
    classifiers=[
        # How mature is this project? Common values are
        #   3 - Alpha
        #   4 - Beta
        #   5 - Production/Stable
        'Development Status :: 3 - Alpha',

        # Indicate who your project is intended for
        'Intended Audience :: Developers',
        'Topic :: Multimedia',
        'Topic :: Multimedia :: Video',
        'Topic :: Scientific/Engineering :: Image Processing',
        'Topic :: Scientific/Engineering :: Image Recognition',
        # License
        'License :: OSI Approved :: Apache Software License',
        # OS Support
        'Operating System :: Unix',
        'Operating System :: POSIX',
        'Operating System :: Microsoft :: Windows',
        # Specify the Python versions you support here. In particular, ensure
        # that you indicate whether you support Python 2, Python 3 or both.
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
        'Programming Language :: Python :: 3.9',
        'Programming Language :: Python :: Implementation :: CPython',
    ],
    project_urls={
        'Issue Tracker': "https://github.com/carnotresearch/cr-vision/issues"
    },
    # What does your project relate to?
    keywords='Computer Vision',

    # You can just specify the packages manually here if your project is
    # simple. Or you can use find_packages().
    packages=find_namespace_packages('src', include=['cr.*']),
    package_dir={'': 'src'},
    py_modules=[splitext(basename(path))[0] for path in glob('src/*.py')],
    python_requires=">=3.6",
    # Alternatively, if you want to distribute just a my_module.py, uncomment
    # this:
    #   py_modules=["my_module"],

    # List run-time dependencies here.  These will be installed by pip when
    # your project is installed. For an analysis of "install_requires" vs pip's
    # requirements files see:
    # https://packaging.python.org/en/latest/requirements.html
    download_url="https://github.com/carnotresearch/cr-vision/archive/v0.1.tar.gz",
    install_requires=[ "numpy", 
        "scipy", 
        "matplotlib", 
        "scikit-image", 
        "opencv-contrib-python",
        "imageio", 
        "click", 
        "sk-video", 
        "pandas",
        "rx",
        # Additional packages for running experiments
        "diskcache",
        # Sphinx documentation related dependencies
        "sphinxcontrib-bibtex",
        "sphinx_rtd_theme",
        # Libraries for compatibility with lower versions of Python
        'backports.cached-property; python_version < "3.8"'
    ],

    # List additional groups of dependencies here (e.g. development
    # dependencies). You can install these using the following syntax,
    # for example:
    # $ pip install -e .[dev,test]
    extras_require={
        'dev': [ ],
        'test': [ "tox"],
    },
    include_package_data=True,
    zip_safe=False,

    # If there are data files included in your packages that need to be
    # installed, specify them here.  If using Python 2.6 or less, then these
    # have to be included in MANIFEST.in as well.
    package_data={
    },

    # Although 'package_data' is the preferred approach, in some case you may
    # need to place data files outside of your packages. See:
    # http://docs.python.org/3.4/distutils/setupscript.html#installing-additional-files # noqa
    # In this case, 'data_file' will be installed into '<sys.prefix>/my_data'
    data_files=[],

    # To provide executable scripts, use entry points in preference to the
    # "scripts" keyword. Entry points provide cross-platform support and allow
    # pip to create the appropriate form of executable for the target platform.
    entry_points={
        'console_scripts': [
            'cr-shrink-stretch=cr.vision.edits.animation:stretch_and_shrink_app',
        ],
    },
)
