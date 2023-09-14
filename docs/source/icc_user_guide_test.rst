User Guide
==========

.. container:: post-content

   #. `Connecting <#connect>`__
   #. `Managing your Account <#acct>`__
   #. `Storage <#fs>`__
   #. `Data Transfer <#dt>`__
   #. `Managing Your Environment (Modules) <#modules>`__
   #. `Programming Environment <#compile>`__
   #. `Running Jobs <#jobs>`__
   #. `Job Dependencies <#jobdepend>`__
   #. `Job Arrays <#jobarrays>`__
   #. `Running MATLAB Batch Jobs <#matlab>`__
   #. `Running Mathematica Batch Jobs <#math>`__
   #. `R Software <#r>`__
   #. `Python Software <#python>`__
   #. `HPC & Other Tutorials <#tutorials>`__
   #. `Investor Specific Information <#investor>`__

   --------------

   .. rubric:: 1. Connecting
      :name: connect

   The Campus Cluster can be accessed via Secure Shell (SSH) to the head
   nodes using your official University NetID login and password.
   Generally Unix/Linux based systems have a ssh client by default,
   however desktops/laptops running versions of Windows prior to Windows
   10 version 1803 do not. There is third party software available for
   Windows users to access the Campus Cluster. Please see this
   non-exhaustive list of `ssh clients <#ssh>`__ that can be used to
   access the Campus Cluster.

   Below is a list of hostnames that provide round-robin access to head
   nodes of the Campus Cluster instances as indicated:

   +-----------------------+-----------------------+-----------------------+
   | Access Method         | Hostname              | Head Node             |
   +-----------------------+-----------------------+-----------------------+
   | SSH                   | cc-login.campu        | namehN                |
   |                       | scluster.illinois.edu | (ex.                  |
   |                       |                       | cc-login1,golubh1)    |
   +-----------------------+-----------------------+-----------------------+

   .. rubric:: SSH
      :name: ssh

   A variety of SSH based clients are available for accessing the Campus
   Cluster from your local system. There are two types of SSH clients,
   clients that support both remote login access and data transfers and
   clients that support data transfers only.

   +-----------------+-----------------+-----------------+-----------------+
   | SSH Client      | Remote Login    | Data Transfer   | Installs On     |
   +-----------------+-----------------+-----------------+-----------------+
   | `MobaXterm <htt | Yes             | Yes             | Windows         |
   | p://mobaxterm.m |                 |                 |                 |
   | obatek.net/>`__ |                 |                 |                 |
   | is an enhanced  |                 |                 |                 |
   | terminal with   |                 |                 |                 |
   | an X server and |                 |                 |                 |
   | a set of Unix   |                 |                 |                 |
   | commands        |                 |                 |                 |
   | (GNU/Cygwin)    |                 |                 |                 |
   | packaged in the |                 |                 |                 |
   | application.    |                 |                 |                 |
   +-----------------+-----------------+-----------------+-----------------+
   | `SSH Secure     | Yes             | Yes             | Windows         |
   | Sh              |                 |                 |                 |
   | ell <https://ww |                 |                 |                 |
   | w.google.com/se |                 |                 |                 |
   | arch?ei=GH8hYKS |                 |                 |                 |
   | FCoi4tAb9z4qwBA |                 |                 |                 |
   | &q=SSHSecureShe |                 |                 |                 |
   | ll+3.2.9&oq>`__ |                 |                 |                 |
   | allows you to   |                 |                 |                 |
   | securely login  |                 |                 |                 |
   | to remote host  |                 |                 |                 |
   | computers, to   |                 |                 |                 |
   | execute         |                 |                 |                 |
   | commands safely |                 |                 |                 |
   | on a remote     |                 |                 |                 |
   | computer, and   |                 |                 |                 |
   | to provide      |                 |                 |                 |
   | secure          |                 |                 |                 |
   | encrypted and   |                 |                 |                 |
   | authenticated   |                 |                 |                 |
   | communications  |                 |                 |                 |
   | between two     |                 |                 |                 |
   | hosts in an     |                 |                 |                 |
   | untrusted       |                 |                 |                 |
   | network.        |                 |                 |                 |
   +-----------------+-----------------+-----------------+-----------------+
   | `Tu             | Yes             | Yes             | Windows         |
   | nnelier <http:/ |                 |                 |                 |
   | /www.bitvise.co |                 |                 |                 |
   | m/tunnelier>`__ |                 |                 |                 |
   | is a flexible   |                 |                 |                 |
   | SSH client      |                 |                 |                 |
   | which includes  |                 |                 |                 |
   | terminal        |                 |                 |                 |
   | emulation,      |                 |                 |                 |
   | graphical as    |                 |                 |                 |
   | well as         |                 |                 |                 |
   | command-line    |                 |                 |                 |
   | SFTP support,   |                 |                 |                 |
   | an FTP-to-SFTP  |                 |                 |                 |
   | bridge,         |                 |                 |                 |
   | additional      |                 |                 |                 |
   | tunneling       |                 |                 |                 |
   | features        |                 |                 |                 |
   | including       |                 |                 |                 |
   | dynamic port    |                 |                 |                 |
   | forwarding      |                 |                 |                 |
   | through         |                 |                 |                 |
   | integrated      |                 |                 |                 |
   | proxy.          |                 |                 |                 |
   +-----------------+-----------------+-----------------+-----------------+
   | `P              | Yes             | Yes             | Windows         |
   | uTTY <http://ww |                 |                 | Linux           |
   | w.chiark.greene |                 |                 | Mac OS          |
   | nd.org.uk/~sgta |                 |                 |                 |
   | tham/putty/>`__ |                 |                 |                 |
   | is an open      |                 |                 |                 |
   | source terminal |                 |                 |                 |
   | emulator        |                 |                 |                 |
   | application     |                 |                 |                 |
   | which can act   |                 |                 |                 |
   | as a client for |                 |                 |                 |
   | the SSH,        |                 |                 |                 |
   | Telnet, rlogin, |                 |                 |                 |
   | and raw TCP     |                 |                 |                 |
   | computing       |                 |                 |                 |
   | protocols and   |                 |                 |                 |
   | as a serial     |                 |                 |                 |
   | console client. |                 |                 |                 |
   +-----------------+-----------------+-----------------+-----------------+
   | `FileZill       | No              | Yes             | Windows         |
   | a <http://filez |                 |                 | Linux           |
   | illa-project.or |                 |                 | Mac OS          |
   | g/index.php>`__ |                 |                 |                 |
   | is a fast and   |                 |                 |                 |
   | reliable        |                 |                 |                 |
   | cross-platform  |                 |                 |                 |
   | FTP, FTPS and   |                 |                 |                 |
   | SFTP client     |                 |                 |                 |
   | with lots of    |                 |                 |                 |
   | useful features |                 |                 |                 |
   | and an          |                 |                 |                 |
   | intuitive       |                 |                 |                 |
   | graphical user  |                 |                 |                 |
   | interface.      |                 |                 |                 |
   +-----------------+-----------------+-----------------+-----------------+
   | `WinSCP <http:  | No              | Yes             | Windows         |
   | //winscp.net/en |                 |                 |                 |
   | g/index.php>`__ |                 |                 |                 |
   | is an open      |                 |                 |                 |
   | source free     |                 |                 |                 |
   | SFTP client,    |                 |                 |                 |
   | SCP client,     |                 |                 |                 |
   | FTPS client and |                 |                 |                 |
   | FTP client for  |                 |                 |                 |
   | Windows. Its    |                 |                 |                 |
   | main function   |                 |                 |                 |
   | is file         |                 |                 |                 |
   | transfer        |                 |                 |                 |
   | between a local |                 |                 |                 |
   | and a remote    |                 |                 |                 |
   | computer.       |                 |                 |                 |
   | Beyond this,    |                 |                 |                 |
   | WinSCP offers   |                 |                 |                 |
   | scripting and   |                 |                 |                 |
   | basic file      |                 |                 |                 |
   | manager         |                 |                 |                 |
   | functionality.  |                 |                 |                 |
   +-----------------+-----------------+-----------------+-----------------+

   **Note:** See the Campus Cluster’s `Storage and Data
   guide <https://campuscluster.illinois.edu/resources/docs/storage-and-data-guide>`__
   for information on transferring files/data to and from the Campus
   Cluster.

   .. rubric:: Network Details for Illinois Investors
      :name: network-details-for-illinois-investors

   The Campus Cluster is interconnected with the University of Illinois
   networks via the *Campus Advanced Research Network Environment*
   (CARNE) and is addressed out of fully-accessible public IP space,
   located outside of the Illinois campus firewall. This positioning of
   the Campus Cluster outside the campus firewall enables access to
   regional and national research networks at high speeds and without
   restrictions. This does mean, however, that for some special use
   cases where it is necessary for Campus Cluster nodes to initiate
   communication with hosts on the Illinois campus network (e.g., you
   are hosting a special license server behind the firewall), you will
   need to coordinate with your department IT pro to ensure that your
   hosts are in the appropriate `Illinois campus firewall
   group <https://techservices.illinois.edu/services/firewall>`__ .
   Outbound communication from Illinois to the Campus Cluster should
   work without issue, as well as any communications from the Campus
   Cluster outbound to regional and national research networks.

   .. rubric:: 2. Managing your Account
      :name: acct

   When your account is first activated, the default shell is set to
   *bash* .

   The *tcsh* shell is also available. To change your shell to tcsh, add
   the following line:

   exec -l /bin/tcsh

   to the end of the file named .bash_profile , located in your home (
   $HOME ) directory. To begin using this new shell, you can either log
   out and then log back in, or execute exec -l /bin/tcsh on your
   command line.

   The Campus Cluster uses the *module* system to set up the user
   environment. See the section `Managing Your Environment
   (Modules) <#modules>`__ for details.

   You can reset your NetID password at the `Password
   Management <https://identity.uillinois.edu/>`__ page.

   .. rubric:: 3. Storage
      :name: fs

   .. rubric:: See new Storage and Data Guide at Link Below
      :name: see-new-storage-and-data-guide-at-link-below

   `Storage and Data
   Guide <https://campuscluster.illinois.edu/resources/docs/storage-and-data-guide/>`__
   .. rubric:: 4. Data Transfer
      :name: dt

   .. rubric:: See new Storage and Data Guide at Link Below
      :name: see-new-storage-and-data-guide-at-link-below-1

   `Storage and Data
   Guide <https://campuscluster.illinois.edu/resources/docs/storage-and-data-guide/>`__
   .. rubric:: 5. Managing Your Environment (Modules)
      :name: modules

   The module command is a user interface to the Modules package. The
   Modules package provides for the dynamic modification of the user’s
   environment via *modulefiles* (a modulefile contains the information
   needed to configure the shell for an application). Modules are
   independent of the user’s shell, so both tcsh and bash users can use
   the same commands to change the environment.

   Useful Module commands:

   +----------------------------------+----------------------------------+
   | Command                          | Description                      |
   +----------------------------------+----------------------------------+
   | module avail                     | lists all available modulefiles  |
   +----------------------------------+----------------------------------+
   | module list                      | lists currently loaded           |
   |                                  | modulefiles                      |
   +----------------------------------+----------------------------------+
   | module help modulefile           | help on module modulefile        |
   +----------------------------------+----------------------------------+
   | module display modulefile        | Display information about        |
   |                                  | modulefile                       |
   +----------------------------------+----------------------------------+
   | module load modulefile           | load modulefile into current     |
   |                                  | shell environment                |
   +----------------------------------+----------------------------------+
   | module unload modulefile         | remove modulefile from current   |
   |                                  | shell environment                |
   +----------------------------------+----------------------------------+
   | module swap modulefile1          | unload modulefile1 and load      |
   | modulefile2                      | modulefile2                      |
   +----------------------------------+----------------------------------+

   **To include particular software in the environment for all new
   shells** , edit your shell configuration file ( $HOME/.bashrc for
   bash users and $HOME/.cshrc for tcsh users) by adding the module
   commands to load the software that you want to be a part of your
   environment. After saving your changes, you can source your shell
   configuration file or log out and then log back in for the changes to
   take effect.

   Note: Order is important. With each module load, the changes are
   prepended to your current environment paths.

   For additional information on Modules, see the module and modulefile
   man pages or visit the `Modules
   SourceForge <http://modules.sourceforge.net/>`__ page.

   .. rubric:: 6. Programming Environment
      :name: compile

   | The Intel compilers are available on the Campus Cluster.
   | ``module load intel/18.0``
   | [Older versions of the Intel compiler are also available. See the
     output from the command module avail intel for the specific
     modules.]

   | The GNU compilers (GCC) version 4.4.7 are in the default user
     environment. Version 7.2.0 is also available — load this version
     with the command:
   | ``module load gcc/7.2.0``

   .. rubric:: Compiler Commands
      :name: compiler-commands

   .. rubric:: Serial
      :name: serial

   To build (compile and link) a serial program in Fortran, C, and C++
   enter:

   +-----------------------------------+-----------------------------------+
   | GCC                               | Intel Compiler                    |
   +-----------------------------------+-----------------------------------+
   | gfortran myprog .f                | ifort myprog .f                   |
   | gcc myprog .c                     | icc myprog .c                     |
   | g++ myprog .cc                    | icpc myprog .cc                   |
   +-----------------------------------+-----------------------------------+

   .. rubric:: MPI
      :name: mpi

   To build (compile and link) a MPI program in Fortran, C, and C++:

   +-----------------------+-----------------------+-----------------------+
   | MPI Implementation    | modulefile for        | Build Commands        |
   |                       | MPI/Compiler          |                       |
   +-----------------------+-----------------------+-----------------------+
   | MVAPICH2              | mv                    | +--------+--------+   |
   | ( `Home               | apich2/2.3-intel-18.0 | | F      |        |   |
   | Pa                    | m                     | | ortran | mpif77 |   |
   | ge <http://mvapich.cs | vapich2/2.3-gcc-7.2.0 | | 77:    | myprog |   |
   | e.ohio-state.edu/>`__ |                       | |        | .f     |   |
   | / `User               |                       | +--------+--------+   |
   | Guide <http           |                       | | F      |        |   |
   | ://mvapich.cse.ohio-s |                       | | ortran | mpif90 |   |
   | tate.edu/support/>`__ |                       | | 90:    | myprog |   |
   | )                     |                       | |        | .f90   |   |
   |                       |                       | +--------+--------+   |
   |                       |                       | | C:     | mpicc  |   |
   |                       |                       | |        | myprog |   |
   |                       |                       | |        | .c     |   |
   |                       |                       | +--------+--------+   |
   |                       |                       | | C++:   |        |   |
   |                       |                       | |        | mpicxx |   |
   |                       |                       | |        | myprog |   |
   |                       |                       | |        | .cc    |   |
   |                       |                       | +--------+--------+   |
   +-----------------------+-----------------------+-----------------------+
   | Open MPI              | ope                   |                       |
   | ( `Home               | nmpi/3.1.1-intel-18.0 |                       |
   | Page <http://         | op                    |                       |
   | www.open-mpi.org/>`__ | enmpi/3.1.1-gcc-7.2.0 |                       |
   | /                     |                       |                       |
   | `Docum                |                       |                       |
   | entation <http://www. |                       |                       |
   | open-mpi.org/doc/>`__ |                       |                       |
   | )                     |                       |                       |
   +-----------------------+-----------------------+-----------------------+
   | Intel MPI             | intel/18.0            | +---                  |
   | ( `Home               |                       | ----+-------+-------+ |
   | Page <https://softw   |                       | |                     |
   | are.intel.com/en-us/i |                       |     |       |       | |
   | ntel-mpi-library/>`__ |                       | |                     |
   | /                     |                       |     |       |       | |
   | `Document             |                       | |                     |
   | ation <https://softwa |                       |     |   GCC | Intel | |
   | re.intel.com/en-us/ar |                       | |                     |
   | ticles/intel-mpi-libr |                       |     |       | Com   | |
   | ary-documentation>`__ |                       | |                     |
   | )                     |                       |     |       | piler | |
   |                       |                       | +---                  |
   |                       |                       | ----+-------+-------+ |
   |                       |                       | | Fo                  |
   |                       |                       |     |       |       | |
   |                       |                       | | rt                  |
   |                       |                       | ran | m     | mpi   | |
   |                       |                       | | 77                  |
   |                       |                       | :   | pif77 | ifort | |
   |                       |                       | |                     |
   |                       |                       |     | m     | m     | |
   |                       |                       | |                     |
   |                       |                       |     | yprog | yprog | |
   |                       |                       | |                     |
   |                       |                       |     | .f    | .f    | |
   |                       |                       | +---                  |
   |                       |                       | ----+-------+-------+ |
   |                       |                       | | Fo                  |
   |                       |                       |     |       |       | |
   |                       |                       | | rt                  |
   |                       |                       | ran | m     | mpi   | |
   |                       |                       | | 90                  |
   |                       |                       | :   | pif90 | ifort | |
   |                       |                       | |                     |
   |                       |                       |     | m     | m     | |
   |                       |                       | |                     |
   |                       |                       |     | yprog | yprog | |
   |                       |                       | |                     |
   |                       |                       |     | .f90  | .f90  | |
   |                       |                       | +---                  |
   |                       |                       | ----+-------+-------+ |
   |                       |                       | | C:                  |
   |                       |                       |     |       |       | |
   |                       |                       | |                     |
   |                       |                       |     | mpicc | m     | |
   |                       |                       | |                     |
   |                       |                       |     | m     | piicc | |
   |                       |                       | |                     |
   |                       |                       |     | yprog | m     | |
   |                       |                       | |                     |
   |                       |                       |     | .c    | yprog | |
   |                       |                       | |                     |
   |                       |                       |     |       | .c    | |
   |                       |                       | +---                  |
   |                       |                       | ----+-------+-------+ |
   |                       |                       | | C+                  |
   |                       |                       | +:  |       |       | |
   |                       |                       | |                     |
   |                       |                       |     | m     | mp    | |
   |                       |                       | |                     |
   |                       |                       |     | picxx | iicpc | |
   |                       |                       | |                     |
   |                       |                       |     | m     | m     | |
   |                       |                       | |                     |
   |                       |                       |     | yprog | yprog | |
   |                       |                       | |                     |
   |                       |                       |     | .cc   | .cc   | |
   |                       |                       | +---                  |
   |                       |                       | ----+-------+-------+ |
   +-----------------------+-----------------------+-----------------------+

   For example, use the following command to load MVAPICH2 v2.3 built
   with the Intel 18.0 compiler:

   ``module load mvapich2/2.3-intel-18.0``

   .. rubric:: OpenMP
      :name: openmp

   To build an OpenMP program, use the -fopenmp / -qopenmp option:

   +-----------------------------------+-----------------------------------+
   | GCC                               | Intel Compiler                    |
   +-----------------------------------+-----------------------------------+
   | gfortran -fopenmp myprog .f       | ifort -qopenmp myprog .f          |
   | gfortran -fopenmp myprog .f90     | ifort -qopenmp myprog .f90        |
   | gcc -fopenmp myprog .c            | icc -qopenmp myprog .c            |
   | g++ -fopenmp myprog .cc           | icpc -qopenmp myprog .cc          |
   +-----------------------------------+-----------------------------------+

   .. rubric:: Hybrid MPI/OpenMP
      :name: hybrid-mpiopenmp

   To build an MPI/OpenMP hybrid program, use the -fopenmp / -qopenmp
   option with the MPI compiling commands:

   +-----------+-----------+-----------+-----------+-----------+-----------+
   | GCC       |           |           | Intel     |           |           |
   |           |           |           | Compiler  |           |           |
   +-----------+-----------+-----------+-----------+-----------+-----------+
   | MVAPICH2  | OpenMPI   | Intel MPI | MVAPICH2  | OpenMPI   | Intel MPI |
   +-----------+-----------+-----------+-----------+-----------+-----------+
   | mpif77    |           |           | mpif77    |           | mpiifort  |
   | -fopenmp  |           |           | -fopenmp  |           | -qopenmp  |
   | myprog .f |           |           | myprog .f |           | myprog .f |
   | mpif90    |           |           | mpif90    |           | mpiifort  |
   | -fopenmp  |           |           | -fopenmp  |           | -qopenmp  |
   | myprog    |           |           | myprog    |           | myprog    |
   | .f90      |           |           | .f90      |           | .f90      |
   | mpicc     |           |           | mpicc     |           | mpiicc    |
   | -fopenmp  |           |           | -fopenmp  |           | -qopenmp  |
   | myprog .c |           |           | myprog .c |           | myprog .c |
   | mpicxx    |           |           | mpicxx    |           | mpiicpc   |
   | -fopenmp  |           |           | -fopenmp  |           | -qopenmp  |
   | myprog    |           |           | myprog    |           | myprog    |
   | .cc       |           |           | .cc       |           | .cc       |
   +-----------+-----------+-----------+-----------+-----------+-----------+

   .. rubric:: CUDA
      :name: cuda

   NVIDIA GPUs are available as a purchase option of the Campus Cluster.
   `CUDA <https://developer.nvidia.com/cuda-zone>`__ is a parallel
   computing platform and programming model from NVIDIA for use on their
   GPUs. These GPUs support CUDA compute capability 2.0.

   Load the `CUDA Toolkit <https://developer.nvidia.com/cuda-toolkit>`__
   into your environment using the following module command:

   module load cuda

   .. rubric:: Libraries
      :name: libs

   The `Intel Math Kernel
   Library <http://software.intel.com/en-us/intel-mkl>`__ (MKL) contains
   the complete set of functions from the basic linear algebra
   subprograms (BLAS), the extended BLAS (sparse), and the complete set
   of LAPACK routines. In addition, there is a set of fast Fourier
   transforms (FFT) in single- and double-precision, real and complex
   data types with both Fortran and C interfaces. The library also
   includes the cblas interfaces, which allow the C programmer to access
   all the functionality of the BLAS without considering C-Fortran
   issues. ScaLAPACK, BLACS and the PARDISO solver are also provided by
   Intel MKL. MKL provides `FFTW
   interfaces <http://software.intel.com/en-us/articles/intel-mkl-main-libraries-contain-fftw3-interfaces/>`__
   to enable applications using FFTW to gain performance with Intel MKL
   and without changing the program source code. Both FFTW2 and FFTW3
   interfaces are provided as source code wrappers to Intel MKL
   functions.

   Load the Intel compiler module to access MKL.

   Use the following -mkl flag options when linking with MKL using the
   Intel compilers:

   | Sequential libraries: -mkl=sequential
   | Threads libraries: -mkl=parallel

   To use MKL with GCC, consult the `Intel MKL link
   advisor <http://software.intel.com/en-us/articles/intel-mkl-link-line-advisor/>`__
   for the link flags to include.

   `OpenBLAS <http://www.openblas.net/>`__ , an optimized BLAS library
   based on GotoBLAS2 is also available. Load the library (version
   0.3.12, built with gcc 7.2.0 ) module with the following command:

   ``module load openblas/0.3.12_sandybridge``

   Link with the OpenBLAS library using

   ``-L /usr/local/src/openblas/0.3.12/gcc/Sandy.Bridge/lib -lopenblas``

   .. rubric:: 7. Running Jobs
      :name: jobs

   User access to the compute nodes for running jobs is available via a
   batch job. The Campus Cluster uses the `Slurm Workload
   Manager <https://slurm.schedmd.com/overview.html>`__ for running
   batch jobs. See the `sbatch <#qsub>`__ section `Batch
   Commands <#batch>`__ for details on batch job submission.

   Please be aware that the interactive (login/head) nodes are a shared
   resource for all users of the system and their use should be limited
   to editing, compiling and building your programs, and for short
   non-intensive runs.

   **Note:** User processes running on the interactive (login/head)
   nodes are killed automatically if they accrue more than 30 minutes of
   CPU time or if more than 4 identical processes owned by the same user
   are running concurrently.

   An interactive batch job provides a way to get interactive access to
   a compute node via a batch job. See the `srun <#qsub_I>`__ or
   `salloc <#qsub_I>`__ section for information on how to run an
   interactive job on the compute nodes. Also, a very short time *test*
   queue provides quick turnaround time for debugging purposes.

   To ensure the health of the batch system and scheduler users should
   refrain from having more than 1,000 batch jobs in the queues at any
   one time.

   See the document `“Running Serial Jobs Efficiently on the Campus
   Cluster” <https://campuscluster.illinois.edu/running-serial-jobs-efficiently-on-the-campus-cluster/>`__
   regarding information on expediting job turnaround time for serial
   jobs.

   See the Running `MATLAB <#matlab>`__ / `Mathematica <#math>`__ Batch
   Jobs sections for information on running MATLAB and Mathematica on
   the campus cluster.

   .. rubric:: Running Programs
      :name: running

   On successful building (compilation and linking) of your program, an
   *executable* is created that is used to run the program. The table
   below describes how to run different types of programs.

   +-----------------------+-----------------------+-----------------------+
   | Program Type          | How to run the        | Example Command       |
   |                       | program/executable    |                       |
   +-----------------------+-----------------------+-----------------------+
   | Serial                | To run serial code,   | ./a.out               |
   |                       | specify the name of   |                       |
   |                       | the executable.       |                       |
   +-----------------------+-----------------------+-----------------------+
   | MPI                   | MPI programs are run  | srun ./a.out          |
   |                       | with the srun command |                       |
   |                       | followed by the name  |                       |
   |                       | of the executable.    |                       |
   |                       | Note: The total       |                       |
   |                       | number of MPI         |                       |
   |                       | processes is the      |                       |
   |                       | {number of nodes} x   |                       |
   |                       | {cores/node} set in   |                       |
   |                       | the batch job         |                       |
   |                       | resource              |                       |
   |                       | specification.        |                       |
   +-----------------------+-----------------------+-----------------------+
   | OpenMP                | The OMP_NUM_THREADS   | In bash: export       |
   |                       | environment variable  | OMP_NUM_THREADS=16    |
   |                       | can be set to specify | In tcsh: setenv       |
   |                       | the number of threads | OMP_NUM_THREADS 16    |
   |                       | used by OpenMP        |                       |
   |                       | programs. If this     | ./a.out               |
   |                       | variable is not set,  |                       |
   |                       | the number of threads |                       |
   |                       | used defaults to one  |                       |
   |                       | under the Intel       |                       |
   |                       | compiler. Under GCC,  |                       |
   |                       | the default behavior  |                       |
   |                       | is to use one thread  |                       |
   |                       | for each core         |                       |
   |                       | available on the      |                       |
   |                       | node.                 |                       |
   |                       | To run OpenMP         |                       |
   |                       | programs, specify the |                       |
   |                       | name of the           |                       |
   |                       | executable.           |                       |
   +-----------------------+-----------------------+-----------------------+
   | MPI/OpenMP            | As with OpenMP        | In bash: export       |
   |                       | programs, the         | OMP_NUM_THREADS=4     |
   |                       | OMP_NUM_THREADS       | In tcsh: setenv       |
   |                       | environment variable  | OMP_NUM_THREADS 4     |
   |                       | can be set to specify |                       |
   |                       | the number of threads | | srun ./a.out        |
   |                       | used by the OpenMP    |                       |
   |                       | portion of the mixed  |                       |
   |                       | MPI/OpenMP program.   |                       |
   |                       | The same default      |                       |
   |                       | behavior applies with |                       |
   |                       | respect to the number |                       |
   |                       | of threads used.      |                       |
   |                       | Use the srun command  |                       |
   |                       | followed by the name  |                       |
   |                       | of the executable to  |                       |
   |                       | run mixed MPI/OpenMP  |                       |
   |                       | programs.             |                       |
   |                       |                       |                       |
   |                       | Note: The number of   |                       |
   |                       | MPI processes per     |                       |
   |                       | node is set in the    |                       |
   |                       | batch job resource    |                       |
   |                       | specification for     |                       |
   |                       | number of cores/node. |                       |
   +-----------------------+-----------------------+-----------------------+

   .. rubric:: Primary Queues
      :name: pqueue

   Each investor group has unrestricted access to a dedicated *primary*
   queue with concurrent access to the number and type of nodes in which
   they invested.

   Users can view the partitions(queues) that they have the ability to
   submit batch jobs to, by typing the following command:
   ``[cc-login1 ~]$ sinfo -s -o "%.16R %.12l %.12L %.5D"``

   Users can also view specific configuration information about the
   compute nodes associated with their primary partition(s), by typing
   the following command:
   ``[cc-login1 ~]$ sinfo -p queue(partition)_name -N -o "%.8N %.4c %.16P %.9m %.12l %.12L %G"``

   .. rubric:: Secondary Queues
      :name: squeue

   One of the advantages of the Campus Cluster Program is the ability to
   share resources. A shared *secondary* queue will allow users access
   to any idle nodes in the cluster. Users must have access to a primary
   queue to be eligible to use the secondary queue.

   While each investor has full access to the number and type of nodes
   in which they invested, those resources not fully utilized by each
   investor will become eligible to run secondary queue jobs. If there
   are resources eligible to run secondary queue jobs but there are no
   jobs to be run from the secondary queue, jobs in the primary queues
   that fit within the constraints of the secondary queue may be run on
   any otherwise appropriate idle nodes. The secondary queue uses
   *fairshare* scheduling.

   The current limits in the secondary queues are below:

   ============= ============ ===========
   Queue         Max Walltime Max # Nodes
   secondary     4 hours      305
   secondary-Eth 4 hours      21
   ============= ============ ===========

   **Notes:**

   -  

      -  Jobs are routed to the secondary queue when a queue is not
         specified. i.e., the secondary queue is the default queue on
         the Campus Cluster.
      -  The difference between secondary and secondary-Eth queues is
         the compute nodes associated with the secondary queue are
         interconnected
         via Infinniband (IB) and the compute nodes that are associated
         with the “secondary-Eth” queue are interconnected via Ethernet.
         Currently
         Ethernet is slower than Infinniband, but this only matters in
         terms of performance if users have batch jobs that use multiple
         nodes and need
         to communicate between nodes (like with MPI codes) or for jobs
         with heavy file system I/O requirements.

   .. rubric:: Test Queue
      :name: tqueue

   A *test* queue is available for providing very short jobs with quick
   turnaround time.

   The current limits in the test queue are:

   ===== ============ ===========
   Queue Max Walltime Max # Nodes
   test  4 hours      2
   ===== ============ ===========

   .. rubric:: Batch Commands
      :name: batch

   Below are brief descriptions of the primary batch commands. For more
   detailed information, refer to the individual man pages.

   .. rubric:: sbatch
      :name: qsub

   **Note:** On Wednesday, September 23, 2020, the Campus Cluster has
   completely transitioned from the **MOAB/Torque (PBS)** batch system
   to the **SLURM** batch system.

   Batch jobs are submitted through a *job script* using the sbatch
   command. Job scripts generally start with a series of SLURM
   *directives* that describe requirements of the job such as number of
   nodes, wall time required, etc… to the batch system/scheduler (SLURM
   directives can also be specified as options on the sbatch command
   line; command line options take precedence over those in the script).
   The rest of the batch script consists of user commands.

   Sample batch scripts are available in the directory
   /projects/consult/slurm .

   The syntax for sbatch is:

   sbatch [list of sbatch options] script_name

   The main sbatch options are listed below. Also See the sbatch man
   page for options.

   -  | The common resource_names are:
      |  ‑‑time= time

      time=maximum wall clock time (d-hh:mm:ss) *[default: maximum limit
      of the queue(partition) submitted to]*

      ‑‑nodes= n

      ‑‑ntasks= p Total number of cores for the batch job

      ‑‑ntasks-per-node= p Number of cores per node (same as ppn under
      PBS)

      n=number of 16/20/24/28/40/128-core nodes *[default: 1 node]*
      p=how many cores(ntasks) per job or per node(ntasks-per-node) to
      use (1 through 40) *[default: 1 core]*

      | Examples:
      | ‑‑time=00:30:00
      | ‑‑nodes=2
      | ‑‑ntasks=32
      | or
      | ‑‑time=00:30:00
      | ‑‑nodes=2
      | ‑‑ntasks-per-node=16

      **Memory needs:** For investors that have nodes with varying
      amounts of memory or to run in the secondary queue, nodes with a
      specific amount of memory can be targeted. The compute nodes have
      memory configurations of 64GB, 128GB, 192GB, 256GB or 384GB. Not
      all memory configurations are available in all investor queues.
      Please check with the `technical
      representative </about/investors/>`__ of your investor group to
      determine what memory configurations are available for the nodes
      in your primary queue.

      | Example:
      | ‑‑time=00:30:00
      | ‑‑nodes=2
      | ‑‑ntask=32
      | ‑‑mem=118000
      | or
      | ‑‑time=00:30:00
      | ‑‑nodes=2
      | ‑‑ntasks-per-node=16
      | ‑‑mem-per-cpu=7375

      **Note: Do not use the memory specification unless absolutely
      required since it could delay scheduling of the
      job; also, if nodes with the specified memory are unavailable for
      the specified queue the job will never run.**

      **Specifying nodes with GPUs:** To run jobs on nodes with
      GPUs, add the resource specification TeslaM2090 (for Tesla M2090),
      TeslaK40M (for Tesla K40M), K80 (for Tesla K80), P100 (for Tesla
      P100), V100 (for Tesla V100), TeslaT4 (for Tesla T4) or A40 (for
      Tesla A40) if your primary queue has nodes with multiple types of
      GPUs, nodes with and without GPUs or if you are submitting jobs to
      the secondary queue. Through the secondary queue any user can
      access the nodes that are configured with any of the specific
      GPUs.

      | Example:
      | ‑‑gres=gpu:V100
      | or
      | ‑‑gres=gpu:V100:2
      | to specify two V100 GPUs (default is 1 if no number is specified
        after the gpu type). **Note:** Requesting more GPUs than what is
        available on a single compute node will result in a failed batch
        job submission.

      | 

      To determine if GPUs are available on any of the compute nodes in
      your group’s partition(queue), run the command:

      ``sinfo -p queue(partition)_name -N -o "%.8N %.4c %.16G %.16P %50f"``

      or check with the `technical representative </about/investors/>`__
      of your investor group.

      | 

   .. rubric:: Useful Batch Job Environment Variables
      :name: env

   +-----------------+-----------------+-----------------+-----------------+
   | Description     | SLURM           | Detail          | PBS Environment |
   |                 | Environment     | Description     | Variable        |
   |                 | Variable        |                 | *(no longer     |
   |                 |                 |                 | valid)*         |
   +-----------------+-----------------+-----------------+-----------------+
   | JobID           | $SLURM_JOB_ID   | Job identifier  | $PBS_JOBID      |
   |                 |                 | assigned to the |                 |
   |                 |                 | job             |                 |
   +-----------------+-----------------+-----------------+-----------------+
   | Job Submission  | $S              | By default,     | $PBS_O_WORKDIR  |
   | Directory       | LURM_SUBMIT_DIR | jobs start in   |                 |
   |                 |                 | the directory   |                 |
   |                 |                 | the job was     |                 |
   |                 |                 | submitted from. |                 |
   |                 |                 | So the   cd     |                 |
   |                 |                 | $S              |                 |
   |                 |                 | LURM_SUBMIT_DIR |                 |
   |                 |                 | command is not  |                 |
   |                 |                 | needed.         |                 |
   +-----------------+-----------------+-----------------+-----------------+
   | Machine(node)   | $SLURM_NODELIST | variable name   | $PBS_NODEFILE   |
   | list            |                 | that containins |                 |
   |                 |                 | the list of     |                 |
   |                 |                 | nodes assigned  |                 |
   |                 |                 | to the batch    |                 |
   |                 |                 | job             |                 |
   +-----------------+-----------------+-----------------+-----------------+
   | Array JobID     | $SLU            | each member of  | $PBS_ARRAYID    |
   |                 | RM_ARRAY_JOB_ID | a job array is  |                 |
   |                 | $SLUR           | assigned a      |                 |
   |                 | M_ARRAY_TASK_ID | unique          |                 |
   |                 |                 | identifier (see |                 |
   |                 |                 | the `Job        |                 |
   |                 |                 | Arrays          |                 |
   |                 |                 | <#jobarrays>`__ |                 |
   |                 |                 | section)        |                 |
   +-----------------+-----------------+-----------------+-----------------+

   See the sbatch man page for additional environment variables
   available.

   .. rubric:: srun
      :name: qsub_I

   The srun command initiates an interactive job on the compute nodes.

   For example, the following command:

   ``[golubh1 ~]$ srun --partition=ncsa --time=00:30:00 --nodes=1 --ntasks-per-node=16 --pty /bin/bash``

   will run an interactive job in the ncsa queue with a wall clock limit
   of 30 minutes, using one node and 16 cores per node. You can also use
   other sbatch options such as those documented above.

   After you enter the command, you will have to wait for SLURM to start
   the job. As with any job, your interactive job will wait in the queue
   until the specified number of nodes is available. If you specify a
   small number of nodes for smaller amounts of time, the wait should be
   shorter because your job will backfill among larger jobs. You will
   see something like this:

   ``srun: job 123456 queued and waiting for resources``

   Once the job starts, you will see:

   ``srun: job 123456 has been allocated resources``

   and will be presented with an interactive shell prompt on the launch
   node. At this point, you can use the appropriate command to start
   your program.

   When you are done with your runs, you can use the exit command to end
   the job.

   .. rubric:: squeue/qstat
      :name: qstat

   Commands that display the status of batch jobs.

   See the man page for other options available.

   .. rubric:: scancel/qdel
      :name: qdel

   The scancel or qdel command deletes a queued job or kills a running
   job.

   -  scancel JobID deletes/kills a job.

   .. rubric:: 8. Job Dependencies
      :name: jobdepend

   SLURM job dependencies allow users to set execution order in which
   their queued jobs run. Job dependencies are set by using the
   ‑‑dependency option with the syntax being ‑‑dependency=<dependency
   type>:<JobID> . SLURM places the jobs in *Hold* state until they are
   eligible to run.

   The following are examples on how to specify job dependencies using
   the afterany dependency type, which indicates to SLURM that the
   dependent job should become eligible to start only after the
   specified job has completed.

   On the command line:

   ``[golubh1 ~]$ sbatch --dependency=afterany:<JobID> jobscript.sbatch``

   In a job script:

   ::

      #!/bin/bash
                                      #SBATCH --time=00:30:00
                                      #SBATCH --nodes=1
                                      #SBATCH --ntasks-per-node=16
                                      #SBATCH --job-name="myjob"
                                      #SBATCH --partition=secondary
                                      #SBATCH --output=myjob.o%j
                                      #SBATCH --dependency=afterany:<JobID>
                                      

   In a shell script that submits batch jobs:

   ::

      #!/bin/bash
                                      JOB_01=`sbatch jobscript1.sbatch |cut -f 4 -d " "`
                                      JOB_02=`sbatch --dependency=afterany:$JOB_01 jobscript2.sbatch |cut -f 4 -d " "`
                                      JOB_03=`sbatch --dependency=afterany:$JOB_02 jobscript3.sbatch |cut -f 4 -d " "`
                                      ...
                                      

   **Note:** Generally the recommended dependency types to use are after
   , afterany , afternotok and afterok . While there are additional
   dependency types, those types that work based on batch job error
   codes may not behave as expected because of the difference between a
   batch job error and application errors. See the dependency section of
   the sbatch manual page for additional information ( man sbatch ).

   .. rubric:: 9. Job Arrays
      :name: jobarrays

   If a need arises to submit the same job to the batch system multiple
   times, instead of issuing one sbatch command for each individual job,
   users can submit a job array. Job arrays allow users to submit
   multiple jobs with a single job script using the ‑‑array option to
   sbatch . An optional slot limit can be specified to limit the amount
   of jobs that can run concurrently in the job array. See the sbatch
   manual page for details ( man sbatch ). The file names for the input,
   output, etc. can be varied for each job using the job array index
   value defined by the SLURM environment variable SLURM_ARRAY_TASK_ID .

   A sample batch script that makes use of job arrays is available in
   /projects/consult/slurm/jobarray.sbatch .

   **Notes:**

   -  | Valid specifications for job arrays are
      |  ‑‑array 1-10
        ‑‑array 1,2,6-10
        ‑‑array 8
        ‑‑array 1-100%5 (a limit of 5 jobs can run concurrently) 

      ::

          

   -  You should limit the number of batch jobs in the queues at any one
      time to 1,000 or less. (Each job within a job array is counted as
      one batch job.)

   -  Interactive batch jobs are not supported with job array
      submissions.

   -  To delete job arrays, see the `qdel <#qdel>`__ command section.

   .. rubric:: 10. Running Matlab Batch Jobs
      :name: matlab

   See the `Using MATLAB on the Campus
   Cluster </resources/docs/user-guide/using-matlab-on-the-campus-cluster/>`__
   page for information on running MATLAB batch jobs.

   .. rubric:: 11. Running Mathematica Batch Jobs
      :name: math

   .. rubric:: Standard batch job
      :name: standard-batch-job

   A sample batch script that runs a Mathematica script is available in
   /projects/consult/slurm/mathematica.sbatch . You can copy and modify
   this script for your own use. Submit the job with:

   ``[golubh1 ~]$ sbatch mathematica.sbatch``

   .. rubric:: In an interactive batch job
      :name: in-an-interactive-batch-job

   -  For the GUI (which will display on your local machine), use the
      –x11 option with the srun command:

      ::

         srun --x11 --export=All --time=00:30:00 --nodes=1 --ntasks-per-node=16 --partition=secondary --pty /bin/bash

      Once the batch job starts, you will have an interactive shell
      prompt on a compute node. Then type:

      ::

         module load mathematica
                                                 mathematica
                                                 

      **Note:** An X-Server must be running on your local machine with
      X11 forwarding enabled within your ssh connection in order to
      display X-Apps, GUIs, etc … back on your local machine. Generally
      users on Linux based machines only have to enable X11 forwarding
      by using the -X option with the ssh command. While users on
      Windows machines will need to ensure that their ssh client has X11
      forwarding enabled and an X-Server is running. A list of ssh
      clients (which includes a combo packaged ssh client and X-Server)
      can be found in the `ssh section <#ssh>`__ . Additional
      information about running X applications can be found on the
      `Using the X Window
      System <https://campuscluster.illinois.edu/using-the-x-window-system/>`__
      page.

   -  ::

          

      For the command line interface:

      ::

         srun --export=All --time=00:30:00 --nodes=1 --ntasks-per-node=16 --partition=secondary --pty /bin/bash

      Once the batch job starts, you will have an interactive shell
      prompt on a compute node. Then type:

      ::

         module load mathematica
                                                 math
                                                 

   .. rubric:: 12. R Software
      :name: r

   See the `R on the Campus Cluster </resources/docs/user-guide/r/>`__
   page for versions available and information on installing add-on
   packages.

   .. rubric:: 13. Python Software
      :name: python

   See the `Python on the Campus
   Cluster </python-on-the-campus-cluster/>`__ page for versions
   available and information on installing add-on packages.

   .. rubric:: 14. HPC & Other Tutorials
      :name: tutorials

   The NSF-funded `Access <https://access-ci.org/>`__ program offers
   training on various HPC topics—see `Access Training and
   Events <https://support.access-ci.org/events>`__ for links to the
   available courses.

   `Introduction to
   Linux <https://www.edx.org/course/linuxfoundationx/linuxfoundationx-lfs101x-introduction-1621>`__
   offered by the LINUX Foundation .

   .. rubric:: 15. Investor Specific Information
      :name: investor

   See `here </about/investors/>`__ for the technical representative of
   each investor group and links to investor web sites (if available).

.. container::

   .. container:: footer-widgets

      .. container:: row

         .. container:: col-sm-12 col-md-6

            .. container:: widget widget_text
               :name: text-3

               .. container:: widget-content

                  .. container:: widget-before-title

                     .. container:: widget-title-background

                     .. rubric:: Contact Us
                        :name: contact-us
                        :class: widget-title

                  .. container:: textwidget

                     | |University of Illinois homepage| Contact
                       `help <mailto:help@campuscluster.illinois.edu>`__
                       with questions regarding this page. All rights
                       reserved.
                     | ©2021 Board of Trustees of the University of
                       Illinois.

                     About Cookies

   .. container:: row

      .. container:: col custom-footer

`  <#>`__

.. |University of Illinois homepage| image:: /wp-content/uploads/2017/12/logo_uiuc_blocki_blue_ui150.png
   :class: footer_logo
   :target: http://illinois.edu/
