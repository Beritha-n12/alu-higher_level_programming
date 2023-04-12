#!/usr/bin/python3
"""
lazy matrix multiplication using module
"""
import numpy as np


def lazy_matrix_mul(m_a, m_b):
    """
    mulltiplying matrices
    checking TypeError with unittest
    """
    return np.matmul(m_a, m_b)
