# Setting Up the Environment

## Install Anaconda or Miniconda

- Download and install **Anaconda** or **Miniconda**:
  - Anaconda: [Anaconda Download](https://www.anaconda.com/products/individual)
  - Miniconda: [Miniconda Download](https://docs.conda.io/en/latest/miniconda.html)

## Create a Conda Environment

1. Open your terminal or Anaconda Prompt.
2. Create a new Conda environment named `sphinx`:

`conda create --name sphinx`

3. Activate the environment:

`conda activate sphinx`


## Install Sphinx and Dependencies

- Upgrade pip in your environment:

`pip install sphinx`

- Install additional dependencies (refer to `conf.py` for any specific version requirements):

```pip install sphinx_copybutton
pip install readthedocs-sphinx-search
pip install sphinx_togglebutton
```


# Building the Documentation

## To Generate HTML Documentation

1. **Clean the Build:**
 - Run the following command to clean the previous builds (if any):
   ```
   make clean
   ```

2. **Build HTML:**
 - Generate the HTML documentation:
   ```
   make html
   ```

